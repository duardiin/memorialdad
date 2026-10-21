import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage } from 'http';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

const lerCorpo = (req: IncomingMessage) =>
  new Promise<Buffer>((resolve, reject) => {
    const partes: Buffer[] = [];
    req.on('data', parte => partes.push(parte));
    req.on('end', () => resolve(Buffer.concat(partes)));
    req.on('error', reject);
  });

// Em desenvolvimento, roda a função da Vercel (api/admin.ts) dentro do próprio Vite
const apiDoPainelEmDesenvolvimento = (): Plugin => ({
  name: 'api-painel-dev',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url !== '/admin') return next();
      res.statusCode = 302;
      res.setHeader('Location', '/admin/');
      res.end();
    });
    server.middlewares.use('/api/admin', async (req, res) => {
      try {
        const modulo = await server.ssrLoadModule('/api/admin.ts');
        const metodo = req.method === 'POST' ? 'POST' : 'GET';
        const cabecalhos = new Headers();
        for (const [nome, valor] of Object.entries(req.headers)) {
          if (typeof valor === 'string') cabecalhos.set(nome, valor);
        }
        const requisicao = new Request(`http://${req.headers.host}${req.originalUrl}`, {
          method: metodo,
          headers: cabecalhos,
          body: metodo === 'POST' ? await lerCorpo(req) : undefined,
        });
        const resposta: Response = await modulo[metodo](requisicao);
        res.statusCode = resposta.status;
        resposta.headers.forEach((valor, nome) => res.setHeader(nome, valor));
        res.end(Buffer.from(await resposta.arrayBuffer()));
      } catch (erro) {
        server.ssrFixStacktrace(erro as Error);
        console.error(erro);
        res.statusCode = 500;
        res.end(JSON.stringify({ erro: 'Erro no servidor de desenvolvimento.' }));
      }
    });
  },
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  if (mode === 'development') {
    // Disponibiliza as variáveis do .env para a API do painel
    for (const [nome, valor] of Object.entries(env)) process.env[nome] ??= valor;
  }
  return {
    plugins: [react(), tailwindcss(), apiDoPainelEmDesenvolvimento()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          admin: path.resolve(__dirname, 'admin/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: {
        // Fotos e usuários gravados pelo painel não precisam recarregar a página
        ignored: ['**/public/uploads/**', '**/admin-data/**'],
      },
    },
  };
});
