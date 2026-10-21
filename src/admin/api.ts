import type { Colecoes, NomeColecao, Papel, UsuarioPublico } from '../content/schema';
import { comprimirFoto } from './imagem';

export class ErroApi extends Error {
  constructor(mensagem: string, public status: number) {
    super(mensagem);
  }
}

const tratar = async <T>(resposta: Response): Promise<T> => {
  let dados: any = null;
  try {
    dados = await resposta.json();
  } catch {
    // resposta sem JSON (ex.: queda de conexão)
  }
  if (!resposta.ok) {
    throw new ErroApi(dados?.erro || 'Não foi possível concluir. Verifique sua conexão e tente de novo.', resposta.status);
  }
  return dados as T;
};

const get = <T>(parametros: Record<string, string>) =>
  fetch(`/api/admin?${new URLSearchParams(parametros)}`, { credentials: 'same-origin' }).then(r => tratar<T>(r));

const post = <T>(acao: string, dados: Record<string, unknown> = {}) =>
  fetch('/api/admin', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ acao, ...dados }),
  }).then(r => tratar<T>(r));

/**
 * Fotos enviadas nesta sessão: guardam a referência do envio (necessária para salvar)
 * e uma prévia local, já que a foto só aparece no endereço do site depois da publicação.
 */
const fotosEnviadas = new Map<string, { ref: string; previa: string }>();

export const previaDaFoto = (url: string) => fotosEnviadas.get(url)?.previa ?? url;

const referenciasDasFotos = (item: unknown) => {
  const texto = JSON.stringify(item);
  return [...fotosEnviadas.entries()]
    .filter(([url]) => texto.includes(`"${url}"`))
    .map(([url, { ref }]) => ({ url, ref }));
};

export type ItemNovo<N extends NomeColecao> = Omit<Colecoes[N], 'id' | '_meta'> & { id?: string };

export const api = {
  sessao: () => get<{ usuario: UsuarioPublico | null }>({ acao: 'sessao' }),
  entrar: (email: string, senha: string) => post<{ usuario: UsuarioPublico }>('entrar', { email, senha }),
  sair: () => post('sair'),

  listar: <N extends NomeColecao>(colecao: N) =>
    get<{ itens: Colecoes[N][] }>({ acao: 'conteudo', colecao }).then(r => r.itens),

  enviarFoto: async (colecao: NomeColecao, arquivo: File) => {
    const { blob, base64 } = await comprimirFoto(arquivo);
    const { url, ref } = await post<{ url: string; ref: string }>('enviarFoto', { colecao, nome: arquivo.name, base64 });
    fotosEnviadas.set(url, { ref, previa: URL.createObjectURL(blob) });
    return url;
  },

  salvar: <N extends NomeColecao>(colecao: N, item: ItemNovo<N>) =>
    post<{ item: Colecoes[N] }>('salvar', { colecao, item, fotosEnviadas: referenciasDasFotos(item) }).then(r => r.item),

  excluir: (colecao: NomeColecao, id: string) => post('excluir', { colecao, id }),

  usuarios: () => get<{ usuarios: UsuarioPublico[] }>({ acao: 'usuarios' }).then(r => r.usuarios),
  salvarUsuario: (dados: { id?: string; nome: string; email: string; papel: Papel; senha?: string }) =>
    post<{ usuario: UsuarioPublico }>('salvarUsuario', dados),
  excluirUsuario: (id: string) => post('excluirUsuario', { id }),
  trocarSenha: (senhaAtual: string, novaSenha: string) => post('trocarSenha', { senhaAtual, novaSenha }),
};
