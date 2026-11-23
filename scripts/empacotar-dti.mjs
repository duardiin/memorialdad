/**
 * Completa a pasta dist-dti/ (gerada por `npm run build:dti`) com a API em PHP,
 * deixando-a pronta para ser copiada para o servidor da UFV. Veja HOSPEDAGEM-DTI.md.
 */
import { cpSync, existsSync, mkdirSync, readdirSync } from 'fs';

const destino = 'dist-dti';
if (!existsSync(`${destino}/index.html`)) {
  console.error('Rode antes: npm run build:dti');
  process.exit(1);
}

mkdirSync(`${destino}/api/conteudo-inicial`, { recursive: true });
cpSync('servidor-php/admin.php', `${destino}/api/admin.php`);
cpSync('servidor-php/config.exemplo.php', `${destino}/api/config.exemplo.php`);

// Conteúdo já adicionado pelo painel da Vercel: vira o ponto de partida no servidor
for (const arquivo of readdirSync('src/content').filter(nome => nome.endsWith('.json'))) {
  cpSync(`src/content/${arquivo}`, `${destino}/api/conteudo-inicial/${arquivo}`);
}

console.log(`Pacote pronto em ${destino}/ (envie o conteúdo desta pasta para o servidor).`);
