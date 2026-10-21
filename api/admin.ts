/**
 * API do Painel Administrativo (função da Vercel em /api/admin).
 *
 * GET  /api/admin?acao=sessao | conteudo&colecao=... | usuarios
 * POST /api/admin  { acao: 'entrar' | 'sair' | 'enviarFoto' | 'salvar' | 'excluir'
 *                        | 'salvarUsuario' | 'excluirUsuario' | 'trocarSenha', ... }
 */
import { randomBytes } from 'crypto';
import { caminhoColecao, type NomeColecao, type UsuarioPublico } from '../src/content/schema.js';
import { ErroArmazenamento, ErroConfiguracao, obterArmazenamento, type Alteracao, type Leitor } from './_lib/armazenamento.js';
import {
  alteracaoUsuarios,
  conferirSenha,
  cookieSaida,
  cookieSessao,
  entrar,
  ErroAcesso,
  exigirUsuario,
  gerarHashSenha,
  lerUsuarios,
  novoIdUsuario,
  paraPublico,
  usuarioPrincipal,
  validarNovaSenha,
} from './_lib/autenticacao.js';
import { COLECOES, ehColecao, ErroValidacao } from './_lib/colecoes.js';

type Dados = Record<string, any>;

const TAMANHO_MAXIMO_FOTO = 3 * 1024 * 1024;

const json = (dados: unknown, status = 200, cabecalhos: Record<string, string> = {}) =>
  new Response(JSON.stringify(dados), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...cabecalhos },
  });

const paraSlug = (texto: string, max = 40) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/g, '') || 'item';

const sufixo = () => randomBytes(4).toString('hex');

const lerLista = async (ler: Leitor, colecao: NomeColecao): Promise<Dados[]> => {
  const conteudo = await ler(caminhoColecao(colecao));
  return conteudo ? JSON.parse(conteudo) : [];
};

const alteracaoLista = (colecao: NomeColecao, lista: Dados[]): Alteracao => ({
  caminho: caminhoColecao(colecao),
  conteudo: JSON.stringify(lista, null, 2) + '\n',
});

const caminhoDaFoto = (url: string) => `public${url}`;

const tipoDaImagem = (dados: Buffer): 'jpg' | 'png' | 'webp' | null => {
  if (dados[0] === 0xff && dados[1] === 0xd8 && dados[2] === 0xff) return 'jpg';
  if (dados.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'png';
  if (dados.subarray(0, 4).toString('ascii') === 'RIFF' && dados.subarray(8, 12).toString('ascii') === 'WEBP') return 'webp';
  return null;
};

// ---------------------------------------------------------------------------
// Ações
// ---------------------------------------------------------------------------

const acoesGet: Record<string, (req: Request, url: URL) => Promise<Response>> = {
  sessao: async req => {
    try {
      const usuario = await exigirUsuario(req, obterArmazenamento().ler);
      return json({ usuario });
    } catch (erro) {
      if (erro instanceof ErroAcesso && erro.status === 401) return json({ usuario: null });
      throw erro;
    }
  },

  conteudo: async (req, url) => {
    const { ler } = obterArmazenamento();
    await exigirUsuario(req, ler);
    const colecao = url.searchParams.get('colecao');
    if (!ehColecao(colecao)) throw new ErroValidacao('Seção desconhecida.');
    return json({ itens: await lerLista(ler, colecao) });
  },

  usuarios: async req => {
    const { ler } = obterArmazenamento();
    await exigirUsuario(req, ler, 'admin');
    const principal = usuarioPrincipal();
    const usuarios: UsuarioPublico[] = [
      ...(principal ? [principal] : []),
      ...(await lerUsuarios(ler)).map(paraPublico),
    ];
    return json({ usuarios });
  },
};

const acoesPost: Record<string, (req: Request, corpo: Dados) => Promise<Response>> = {
  entrar: async (req, corpo) => {
    const { usuario, hash } = await entrar(obterArmazenamento().ler, corpo.email, corpo.senha);
    return json({ usuario }, 200, { 'Set-Cookie': cookieSessao(req, usuario.id, hash) });
  },

  sair: async req => json({ ok: true }, 200, { 'Set-Cookie': cookieSaida(req) }),

  enviarFoto: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    await exigirUsuario(req, armazenamento.ler);
    if (!ehColecao(corpo.colecao)) throw new ErroValidacao('Seção desconhecida.');
    if (typeof corpo.base64 !== 'string') throw new ErroValidacao('Foto inválida.');

    const dados = Buffer.from(corpo.base64, 'base64');
    if (dados.length > TAMANHO_MAXIMO_FOTO) throw new ErroValidacao('A foto é grande demais (máximo de 3 MB).');
    const tipo = tipoDaImagem(dados);
    if (!tipo) throw new ErroValidacao('Formato de foto não aceito. Use JPG, PNG ou WebP.');

    const nomeOriginal = typeof corpo.nome === 'string' ? corpo.nome.replace(/\.[^.]+$/, '') : 'foto';
    const pasta = paraSlug(corpo.colecao.replace(/([A-Z])/g, '-$1'));
    const url = `/uploads/${pasta}/${new Date().getFullYear()}/${paraSlug(nomeOriginal)}-${sufixo()}.${tipo}`;
    const ref = await armazenamento.criarArquivoBinario(caminhoDaFoto(url), corpo.base64);
    return json({ url, ref });
  },

  salvar: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    const usuario = await exigirUsuario(req, armazenamento.ler);
    if (!ehColecao(corpo.colecao)) throw new ErroValidacao('Seção desconhecida.');
    const colecao: NomeColecao = corpo.colecao;
    const definicao = COLECOES[colecao] as (typeof COLECOES)[NomeColecao];
    const entrada: Dados = corpo.item && typeof corpo.item === 'object' ? corpo.item : {};
    const validado = definicao.validar(entrada) as Dados;
    const fotosEnviadas = new Map<string, string>(
      Array.isArray(corpo.fotosEnviadas)
        ? corpo.fotosEnviadas.filter((f: Dados) => typeof f?.url === 'string' && typeof f?.ref === 'string').map((f: Dados) => [f.url, f.ref])
        : []
    );
    const titulo = definicao.titulo(validado as any);
    const agora = new Date().toISOString();

    const item = await armazenamento.gravar(
      `Painel: ${entrada.id ? 'atualiza' : 'adiciona'} ${definicao.rotulo} "${titulo}" (por ${usuario.nome})`,
      async ler => {
        const lista = await lerLista(ler, colecao);
        const indice = typeof entrada.id === 'string' ? lista.findIndex(i => i.id === entrada.id) : -1;
        if (entrada.id && indice === -1) throw new ErroValidacao('Este item não existe mais. Recarregue a página.');
        const anterior = indice >= 0 ? lista[indice] : null;

        const fotosAntes = new Set(anterior ? definicao.fotos(anterior as any) : []);
        const fotosDepois = new Set(definicao.fotos(validado as any));
        const alteracoes: Alteracao[] = [];
        for (const url of fotosDepois) {
          if (fotosAntes.has(url)) continue;
          const ref = fotosEnviadas.get(url);
          if (!ref) throw new ErroValidacao('Uma das fotos não foi enviada corretamente. Envie-a de novo.');
          alteracoes.push({ caminho: caminhoDaFoto(url), blobSha: ref });
        }
        for (const url of fotosAntes) {
          if (!fotosDepois.has(url)) alteracoes.push({ caminho: caminhoDaFoto(url), remover: true });
        }

        const novo: Dados = anterior
          ? { id: anterior.id, ...validado, _meta: { ...anterior._meta, atualizadoEm: agora, atualizadoPor: usuario.nome } }
          : { id: `${paraSlug(titulo)}-${sufixo()}`, ...validado, _meta: { criadoEm: agora, criadoPor: usuario.nome } };

        if (anterior) lista[indice] = novo;
        else lista.push(novo);
        alteracoes.push(alteracaoLista(colecao, lista));
        return { alteracoes, resultado: novo };
      }
    );
    return json({ item });
  },

  excluir: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    const usuario = await exigirUsuario(req, armazenamento.ler);
    if (!ehColecao(corpo.colecao)) throw new ErroValidacao('Seção desconhecida.');
    const colecao: NomeColecao = corpo.colecao;
    const definicao = COLECOES[colecao] as (typeof COLECOES)[NomeColecao];

    await armazenamento.gravar(`Painel: remove ${definicao.rotulo} (por ${usuario.nome})`, async ler => {
      const lista = await lerLista(ler, colecao);
      const item = lista.find(i => i.id === corpo.id);
      if (!item) return { alteracoes: [], resultado: null };
      const alteracoes: Alteracao[] = definicao.fotos(item as any).map(url => ({ caminho: caminhoDaFoto(url), remover: true }));
      alteracoes.push(alteracaoLista(colecao, lista.filter(i => i.id !== corpo.id)));
      return { alteracoes, resultado: null };
    });
    return json({ ok: true });
  },

  salvarUsuario: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    const admin = await exigirUsuario(req, armazenamento.ler, 'admin');

    const nome = typeof corpo.nome === 'string' ? corpo.nome.trim().slice(0, 120) : '';
    const email = typeof corpo.email === 'string' ? corpo.email.trim().toLowerCase() : '';
    const papel = corpo.papel === 'admin' ? 'admin' : 'editor';
    if (!nome) throw new ErroValidacao('Informe o nome.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ErroValidacao('Informe um e-mail válido.');
    if (email === usuarioPrincipal()?.email) throw new ErroValidacao('Este e-mail já é usado pela conta principal.');
    const senha = corpo.senha ? validarNovaSenha(corpo.senha) : null;
    const senhaHash = senha ? await gerarHashSenha(senha) : null;

    const usuario = await armazenamento.gravar(`Painel: atualiza usuários (por ${admin.nome})`, async ler => {
      const usuarios = await lerUsuarios(ler);
      if (usuarios.some(u => u.email === email && u.id !== corpo.id)) {
        throw new ErroValidacao('Já existe uma pessoa com este e-mail.');
      }
      const indice = corpo.id ? usuarios.findIndex(u => u.id === corpo.id) : -1;
      if (corpo.id && indice === -1) throw new ErroValidacao('Esta pessoa não existe mais. Recarregue a página.');

      if (indice >= 0) {
        if (corpo.id === admin.id && papel !== 'admin') throw new ErroValidacao('Você não pode tirar seu próprio acesso de administrador.');
        usuarios[indice] = { ...usuarios[indice], nome, email, papel, ...(senhaHash ? { senhaHash } : {}) };
      } else {
        if (!senhaHash) throw new ErroValidacao('Defina uma senha inicial.');
        usuarios.push({ id: novoIdUsuario(), nome, email, papel, senhaHash, criadoEm: new Date().toISOString() });
      }
      const salvo = usuarios[indice >= 0 ? indice : usuarios.length - 1];
      return { alteracoes: [alteracaoUsuarios(usuarios)], resultado: paraPublico(salvo) };
    });
    return json({ usuario });
  },

  excluirUsuario: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    const admin = await exigirUsuario(req, armazenamento.ler, 'admin');
    if (corpo.id === admin.id) throw new ErroValidacao('Você não pode remover a si mesmo.');
    await armazenamento.gravar(`Painel: atualiza usuários (por ${admin.nome})`, async ler => {
      const usuarios = await lerUsuarios(ler);
      const restantes = usuarios.filter(u => u.id !== corpo.id);
      if (restantes.length === usuarios.length) return { alteracoes: [], resultado: null };
      return { alteracoes: [alteracaoUsuarios(restantes)], resultado: null };
    });
    return json({ ok: true });
  },

  trocarSenha: async (req, corpo) => {
    const armazenamento = obterArmazenamento();
    const usuario = await exigirUsuario(req, armazenamento.ler);
    if (usuario.principal) {
      throw new ErroValidacao('A senha da conta principal é definida nas configurações da Vercel (ADMIN_PASSWORD).');
    }
    const novaSenha = validarNovaSenha(corpo.novaSenha);
    const novoHash = await gerarHashSenha(novaSenha);

    await armazenamento.gravar(`Painel: atualiza usuários (por ${usuario.nome})`, async ler => {
      const usuarios = await lerUsuarios(ler);
      const salvo = usuarios.find(u => u.id === usuario.id);
      if (!salvo || typeof corpo.senhaAtual !== 'string' || !(await conferirSenha(corpo.senhaAtual, salvo.senhaHash))) {
        throw new ErroValidacao('A senha atual está incorreta.');
      }
      salvo.senhaHash = novoHash;
      return { alteracoes: [alteracaoUsuarios(usuarios)], resultado: null };
    });
    return json({ ok: true }, 200, { 'Set-Cookie': cookieSessao(req, usuario.id, novoHash) });
  },
};

// ---------------------------------------------------------------------------
// Entrada
// ---------------------------------------------------------------------------

const tratarErro = (erro: unknown) => {
  if (erro instanceof ErroAcesso) return json({ erro: erro.message }, erro.status);
  if (erro instanceof ErroValidacao) return json({ erro: erro.message }, 400);
  console.error(erro);
  if (erro instanceof ErroConfiguracao) return json({ erro: erro.message }, 500);
  if (erro instanceof ErroArmazenamento) {
    return json({ erro: 'Não foi possível salvar agora. Tente de novo em alguns instantes.' }, 502);
  }
  return json({ erro: 'Ocorreu um erro inesperado. Tente de novo.' }, 500);
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const acao = acoesGet[url.searchParams.get('acao') || ''];
    if (!acao) return json({ erro: 'Ação desconhecida.' }, 404);
    return await acao(request, url);
  } catch (erro) {
    return tratarErro(erro);
  }
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get('content-type')?.includes('application/json')) {
      return json({ erro: 'Requisição inválida.' }, 415);
    }
    let corpo: Dados;
    try {
      corpo = await request.json();
    } catch {
      return json({ erro: 'Requisição inválida.' }, 400);
    }
    const acao = acoesPost[corpo?.acao];
    if (!acao) return json({ erro: 'Ação desconhecida.' }, 404);
    return await acao(request, corpo);
  } catch (erro) {
    return tratarErro(erro);
  }
}
