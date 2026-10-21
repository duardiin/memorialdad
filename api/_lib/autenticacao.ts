/**
 * Login do painel: usuários, senhas e sessão.
 *
 * - A "conta principal" vem das variáveis ADMIN_EMAIL / ADMIN_PASSWORD da Vercel.
 *   Ela sempre funciona e serve para recuperar o acesso se as outras senhas se perderem.
 * - As demais contas ficam em admin-data/usuarios.json, criptografado com ADMIN_SECRET
 *   (o repositório pode ser público sem expor e-mails ou senhas).
 * - A sessão é um cookie assinado com ADMIN_SECRET, válido por 12 horas.
 */
import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, randomUUID, scrypt, timingSafeEqual } from 'crypto';
import type { Papel, UsuarioPublico } from '../../src/content/schema.js';
import type { Alteracao, Leitor } from './armazenamento.js';

export const CAMINHO_USUARIOS = 'admin-data/usuarios.json';
const COOKIE = 'memorial_admin';
const DURACAO_SESSAO_MS = 12 * 60 * 60 * 1000;

export interface UsuarioSalvo extends UsuarioPublico {
  senhaHash: string;
  criadoEm: string;
}

export class ErroAcesso extends Error {
  constructor(mensagem: string, public status = 401) {
    super(mensagem);
  }
}

const segredo = () => {
  const valor = process.env.ADMIN_SECRET;
  if (!valor || valor.length < 32) {
    throw new ErroAcesso('Painel não configurado: defina ADMIN_SECRET (mínimo de 32 caracteres) na Vercel.', 500);
  }
  return valor;
};

// ---------------------------------------------------------------------------
// Senhas
// ---------------------------------------------------------------------------

const scryptAsync = (senha: string, sal: Buffer) =>
  new Promise<Buffer>((resolve, reject) =>
    scrypt(senha, sal, 64, { N: 16384, r: 8, p: 1 }, (erro, chave) => (erro ? reject(erro) : resolve(chave)))
  );

export const gerarHashSenha = async (senha: string) => {
  const sal = randomBytes(16);
  const chave = await scryptAsync(senha, sal);
  return `scrypt$${sal.toString('base64')}$${chave.toString('base64')}`;
};

const conferirSenha = async (senha: string, hash: string) => {
  const [tipo, sal, chave] = hash.split('$');
  if (tipo !== 'scrypt' || !sal || !chave) return false;
  const calculada = await scryptAsync(senha, Buffer.from(sal, 'base64'));
  const esperada = Buffer.from(chave, 'base64');
  return calculada.length === esperada.length && timingSafeEqual(calculada, esperada);
};

const igualSeguro = (a: string, b: string) => {
  const ha = createHash('sha256').update(a).digest();
  const hb = createHash('sha256').update(b).digest();
  return timingSafeEqual(ha, hb);
};

export const validarNovaSenha = (senha: unknown): string => {
  if (typeof senha !== 'string' || senha.length < 8) {
    throw new ErroAcesso('A senha precisa ter pelo menos 8 caracteres.', 400);
  }
  if (senha.length > 200) throw new ErroAcesso('Senha muito longa.', 400);
  return senha;
};

// ---------------------------------------------------------------------------
// Arquivo de usuários (criptografado)
// ---------------------------------------------------------------------------

const chaveCriptografia = () => createHash('sha256').update(`usuarios:${segredo()}`).digest();

const criptografar = (texto: string) => {
  const iv = randomBytes(12);
  const cifra = createCipheriv('aes-256-gcm', chaveCriptografia(), iv);
  const dados = Buffer.concat([cifra.update(texto, 'utf8'), cifra.final()]);
  return JSON.stringify(
    {
      aviso: 'Arquivo gerado pelo Painel Administrativo. Não edite manualmente.',
      iv: iv.toString('base64'),
      tag: cifra.getAuthTag().toString('base64'),
      dados: dados.toString('base64'),
    },
    null,
    2
  ) + '\n';
};

const descriptografar = (conteudo: string): string => {
  const { iv, tag, dados } = JSON.parse(conteudo);
  const decifra = createDecipheriv('aes-256-gcm', chaveCriptografia(), Buffer.from(iv, 'base64'));
  decifra.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([decifra.update(Buffer.from(dados, 'base64')), decifra.final()]).toString('utf8');
};

export const lerUsuarios = async (ler: Leitor): Promise<UsuarioSalvo[]> => {
  const conteudo = await ler(CAMINHO_USUARIOS);
  if (!conteudo) return [];
  try {
    return JSON.parse(descriptografar(conteudo));
  } catch {
    // Acontece se o ADMIN_SECRET for trocado: só a conta principal continua funcionando
    console.error('Não foi possível ler admin-data/usuarios.json (ADMIN_SECRET foi alterado?)');
    return [];
  }
};

export const alteracaoUsuarios = (usuarios: UsuarioSalvo[]): Alteracao => ({
  caminho: CAMINHO_USUARIOS,
  conteudo: criptografar(JSON.stringify(usuarios)),
});

export const usuarioPrincipal = (): UsuarioPublico | null => {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (!email || !process.env.ADMIN_PASSWORD) return null;
  return { id: 'principal', nome: 'Conta principal', email, papel: 'admin', principal: true };
};

export const paraPublico = ({ id, nome, email, papel }: UsuarioSalvo): UsuarioPublico => ({ id, nome, email, papel });

// ---------------------------------------------------------------------------
// Sessão
// ---------------------------------------------------------------------------

interface DadosSessao {
  id: string;
  /** Muda quando a senha muda, para encerrar sessões antigas. */
  versao: string;
  expira: number;
}

const assinar = (texto: string) => createHmac('sha256', `sessao:${segredo()}`).update(texto).digest('base64url');

const versaoSenha = (hash: string) => createHash('sha256').update(hash).digest('base64url').slice(0, 12);

const criarToken = (id: string, hashSenha: string) => {
  const dados: DadosSessao = { id, versao: versaoSenha(hashSenha), expira: Date.now() + DURACAO_SESSAO_MS };
  const corpo = Buffer.from(JSON.stringify(dados)).toString('base64url');
  return `${corpo}.${assinar(corpo)}`;
};

const lerToken = (token: string): DadosSessao | null => {
  const [corpo, assinatura] = token.split('.');
  if (!corpo || !assinatura || !igualSeguro(assinar(corpo), assinatura)) return null;
  try {
    const dados = JSON.parse(Buffer.from(corpo, 'base64url').toString('utf8')) as DadosSessao;
    return dados.expira > Date.now() ? dados : null;
  } catch {
    return null;
  }
};

const lerCookie = (request: Request) => {
  const cabecalho = request.headers.get('cookie') || '';
  for (const parte of cabecalho.split(';')) {
    const [nome, ...valor] = parte.trim().split('=');
    if (nome === COOKIE) return valor.join('=');
  }
  return null;
};

const atributosCookie = (request: Request) => {
  const seguro = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `Path=/api; HttpOnly; SameSite=Strict${seguro}`;
};

export const cookieSessao = (request: Request, id: string, hashSenha: string) =>
  `${COOKIE}=${criarToken(id, hashSenha)}; Max-Age=${DURACAO_SESSAO_MS / 1000}; ${atributosCookie(request)}`;

export const cookieSaida = (request: Request) => `${COOKIE}=; Max-Age=0; ${atributosCookie(request)}`;

/** Hash usado para a versão da sessão da conta principal (muda se ADMIN_PASSWORD mudar). */
const hashPrincipal = () => createHash('sha256').update(`principal:${process.env.ADMIN_PASSWORD}`).digest('base64');

export const entrar = async (ler: Leitor, email: unknown, senha: unknown) => {
  if (typeof email !== 'string' || typeof senha !== 'string') throw new ErroAcesso('Informe e-mail e senha.', 400);
  const emailNormalizado = email.trim().toLowerCase();

  const principal = usuarioPrincipal();
  if (principal && emailNormalizado === principal.email) {
    if (igualSeguro(senha, process.env.ADMIN_PASSWORD!)) return { usuario: principal, hash: hashPrincipal() };
  } else {
    const usuario = (await lerUsuarios(ler)).find(u => u.email === emailNormalizado);
    if (usuario && (await conferirSenha(senha, usuario.senhaHash))) {
      return { usuario: paraPublico(usuario), hash: usuario.senhaHash };
    }
  }

  segredo(); // garante a mensagem de "não configurado" em vez de "senha incorreta"
  await new Promise(resolve => setTimeout(resolve, 600));
  throw new ErroAcesso('E-mail ou senha incorretos.');
};

/** Confere o cookie e devolve o usuário logado (ou lança ErroAcesso). */
export const exigirUsuario = async (request: Request, ler: Leitor, papel?: Papel): Promise<UsuarioPublico> => {
  const token = lerCookie(request);
  const sessao = token ? lerToken(token) : null;
  if (!sessao) throw new ErroAcesso('Sua sessão expirou. Entre novamente.');

  let usuario: UsuarioPublico | null = null;
  if (sessao.id === 'principal') {
    const principal = usuarioPrincipal();
    if (principal && sessao.versao === versaoSenha(hashPrincipal())) usuario = principal;
  } else {
    const salvo = (await lerUsuarios(ler)).find(u => u.id === sessao.id);
    if (salvo && sessao.versao === versaoSenha(salvo.senhaHash)) usuario = paraPublico(salvo);
  }

  if (!usuario) throw new ErroAcesso('Sua sessão expirou. Entre novamente.');
  if (papel === 'admin' && usuario.papel !== 'admin') {
    throw new ErroAcesso('Apenas administradores podem fazer isso.', 403);
  }
  return usuario;
};

export const novoIdUsuario = () => randomUUID();
export { conferirSenha };
