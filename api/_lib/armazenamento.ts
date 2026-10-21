/**
 * Onde o painel grava o conteúdo.
 *
 * - Em produção (Vercel): no próprio repositório do GitHub, por meio da API.
 *   Cada gravação vira um commit, e a Vercel publica o site de novo sozinha.
 * - Em desenvolvimento (sem GITHUB_TOKEN): direto nos arquivos desta pasta.
 */
import { promises as fs } from 'fs';
import path from 'path';

export interface Alteracao {
  caminho: string;
  /** Novo conteúdo de texto do arquivo. */
  conteudo?: string;
  /** Arquivo binário já enviado antes (ver criarArquivoBinario). */
  blobSha?: string;
  /** Remove o arquivo. */
  remover?: boolean;
}

export type Leitor = (caminho: string) => Promise<string | null>;

export interface Armazenamento {
  ler: Leitor;
  /** Envia um arquivo binário (foto) e devolve uma referência para usar em `gravar`. */
  criarArquivoBinario: (caminho: string, base64: string) => Promise<string>;
  /**
   * Lê, altera e grava de forma atômica: se outra pessoa salvar ao mesmo tempo,
   * a operação é refeita a partir da versão mais nova.
   */
  gravar: <T>(
    mensagem: string,
    operacao: (ler: Leitor) => Promise<{ alteracoes: Alteracao[]; resultado: T }>
  ) => Promise<T>;
}

export class ErroArmazenamento extends Error {}

/** Falta configurar alguma variável na Vercel: a mensagem é mostrada como está. */
export class ErroConfiguracao extends Error {}

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

const criarArmazenamentoGitHub = (token: string, repo: string, branch: string): Armazenamento => {
  const base = `https://api.github.com/repos/${repo}`;

  const gh = async (rota: string, init: RequestInit = {}, aceitar = 'application/vnd.github+json') => {
    const resposta = await fetch(`${base}${rota}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: aceitar,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'memorial-dad-painel',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      },
    });
    return resposta;
  };

  const ghJson = async (rota: string, init: RequestInit = {}) => {
    const resposta = await gh(rota, init);
    if (!resposta.ok) {
      const corpo = await resposta.text();
      const erro = new ErroArmazenamento(`GitHub ${resposta.status} em ${rota}: ${corpo.slice(0, 300)}`);
      (erro as any).status = resposta.status;
      throw erro;
    }
    return resposta.json();
  };

  const lerEm = (ref: string): Leitor => async caminho => {
    const resposta = await gh(
      `/contents/${encodeURI(caminho)}?ref=${encodeURIComponent(ref)}`,
      {},
      'application/vnd.github.raw+json'
    );
    if (resposta.status === 404) return null;
    if (!resposta.ok) throw new ErroArmazenamento(`GitHub ${resposta.status} ao ler ${caminho}`);
    return resposta.text();
  };

  return {
    ler: lerEm(branch),

    criarArquivoBinario: async (_caminho, base64) => {
      const blob = await ghJson('/git/blobs', {
        method: 'POST',
        body: JSON.stringify({ content: base64, encoding: 'base64' }),
      });
      return blob.sha as string;
    },

    gravar: async (mensagem, operacao) => {
      for (let tentativa = 1; ; tentativa++) {
        const ref = await ghJson(`/git/ref/heads/${encodeURIComponent(branch)}`);
        const commitAtual = ref.object.sha as string;
        const { tree } = await ghJson(`/git/commits/${commitAtual}`);

        const { alteracoes, resultado } = await operacao(lerEm(commitAtual));
        if (alteracoes.length === 0) return resultado;

        const novaArvore = await ghJson('/git/trees', {
          method: 'POST',
          body: JSON.stringify({
            base_tree: tree.sha,
            tree: alteracoes.map(a => ({
              path: a.caminho,
              mode: '100644',
              type: 'blob',
              ...(a.remover ? { sha: null } : a.blobSha ? { sha: a.blobSha } : { content: a.conteudo ?? '' }),
            })),
          }),
        });
        const novoCommit = await ghJson('/git/commits', {
          method: 'POST',
          body: JSON.stringify({ message: mensagem, tree: novaArvore.sha, parents: [commitAtual] }),
        });

        try {
          await ghJson(`/git/refs/heads/${encodeURIComponent(branch)}`, {
            method: 'PATCH',
            body: JSON.stringify({ sha: novoCommit.sha, force: false }),
          });
          return resultado;
        } catch (erro) {
          // 422 = alguém gravou no meio do caminho; refaz a partir da versão nova
          if ((erro as any).status === 422 && tentativa < 4) continue;
          throw erro;
        }
      }
    },
  };
};

// ---------------------------------------------------------------------------
// Local (apenas para desenvolvimento)
// ---------------------------------------------------------------------------

const criarArmazenamentoLocal = (raiz: string): Armazenamento => {
  const absoluto = (caminho: string) => {
    const destino = path.resolve(raiz, caminho);
    if (!destino.startsWith(path.resolve(raiz) + path.sep)) throw new ErroArmazenamento('Caminho inválido');
    return destino;
  };

  const ler: Leitor = async caminho => {
    try {
      return await fs.readFile(absoluto(caminho), 'utf8');
    } catch {
      return null;
    }
  };

  const binariosPendentes = new Map<string, Buffer>();

  return {
    ler,
    criarArquivoBinario: async (caminho, base64) => {
      const id = `local-${binariosPendentes.size}-${Date.now()}`;
      binariosPendentes.set(id, Buffer.from(base64, 'base64'));
      return id;
    },
    gravar: async (_mensagem, operacao) => {
      const { alteracoes, resultado } = await operacao(ler);
      for (const a of alteracoes) {
        const destino = absoluto(a.caminho);
        if (a.remover) {
          await fs.rm(destino, { force: true });
          continue;
        }
        await fs.mkdir(path.dirname(destino), { recursive: true });
        if (a.blobSha) {
          const dados = binariosPendentes.get(a.blobSha);
          if (!dados) throw new ErroArmazenamento('Foto não encontrada. Envie a foto novamente.');
          await fs.writeFile(destino, dados);
          binariosPendentes.delete(a.blobSha);
        } else {
          await fs.writeFile(destino, a.conteudo ?? '');
        }
      }
      return resultado;
    },
  };
};

let instancia: Armazenamento | null = null;

export const obterArmazenamento = (): Armazenamento => {
  if (instancia) return instancia;
  const { GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH } = process.env;
  if (GITHUB_TOKEN && GITHUB_REPO) {
    instancia = criarArmazenamentoGitHub(GITHUB_TOKEN, GITHUB_REPO, GITHUB_BRANCH || 'main');
  } else if (!process.env.VERCEL) {
    instancia = criarArmazenamentoLocal(process.cwd());
  } else {
    throw new ErroConfiguracao('Painel não configurado: falta definir GITHUB_TOKEN e GITHUB_REPO na Vercel (veja PAINEL-ADMIN.md).');
  }
  return instancia;
};
