# Apresentação do Memorial DAD

Notas para continuar editando a apresentação do Memorial. A apresentação foi feita com o Claude Code em 29/10/2026.

## Onde está

- **Link:** https://claude.ai/artifact/E36pPcegEK1boGZp4W73yY
- **Formato:** apresentação do tipo *Slides* do claude.ai. É privada, então só abre para quem você compartilhar pelo botão **Share**.
- **Como apresentar:** pelo navegador, no modo **Present**. As animações só funcionam assim. Baixada em PPTX ou PDF, cada animação vira uma imagem parada.

## Contexto

- **Divisão:** três professores aposentados apresentam marcos históricos de alguns anos. O Eduardo apresenta o site como um todo.
- **Público:** pessoas do departamento, **sem ninguém de TI**. Por isso a apresentação mostra o que o site oferece ("a linha do tempo mostra X", "as fotos ficam na aba Y") e deixa de fora hospedagem, custo, domínio e ferramentas.
- **Visual:** as cores e fontes do próprio site.
  - Azul-marinho `#0F172A` e `#1E293B`, dourado `#B45309` e `#FDE68A`, fundo claro `#F8FAFC` e `#EEF2F7`.
  - Fontes Merriweather (títulos) e Source Sans 3 (textos).
- **Notas do apresentador:** todos os slides têm o roteiro do que falar.

## Slides (16)

| # | Slide | Conteúdo | Animação |
|---|---|---|---|
| 1 | Capa: "Um passeio pelo Memorial" | Título e nome do Eduardo | Contador de 1974 a 2026 com anel dourado; título surge em sequência |
| 2 | A história estava espalhada | Atas, Jornal da UFV, fotos, memória das pessoas | — |
| 3 | O memorial em números | 473 registros · 53 anos · 198 fotos · 200+ referências ao Arquivo Central | Números sobem a partir de 0 |
| 4 | Do arquivo ao site | Pesquisa, organização, publicação, contribuição | — |
| 5 | O que o site oferece | Mapa das 6 partes do site | — |
| 6 | No computador e no celular | Prints da página inicial | Prints entram em sequência |
| 7 | Cada ano tem sua história | Print da tela "Por Ano" em 1988 | Print entra deslizando |
| 8 | O relato, as fotos e os documentos | Print de um registro aberto (Contábeis, 1988) | Print cresce |
| 9 | O acervo fotográfico | Print da aba Fotos (198 fotos) | Print entra deslizando |
| 10 | As pessoas que fizeram o DAD | Chefias, professores, técnicos, homenageados | — |
| 11 | Quem as turmas homenagearam | Print da página de homenageados | Print sobe |
| 12 | Projetos em destaque | NAIPE (1986), Desmembramento (1988), Projeto Quebec (1989) | Cartões sobem um a um |
| 13 | Encontre qualquer nome | Busca no acervo | Réplica animada da busca digitando "Nina Rosa" (em loop) |
| 14 | Um memorial que continua crescendo | Como contribuir | Réplica animada do formulário do painel sendo preenchido e publicado (em loop) |
| 15 | Vamos navegar juntos | Roteiro da demonstração ao vivo | — |
| 16 | Obrigado! | Foto, nome, link do site e LinkedIn | Foto entra com efeito "pop" |

## Para editar depois

- **Pelo claude.ai:** dá para editar textos direto no editor da apresentação.
- **Pelo Claude Code:** peça para editar a apresentação e passe o link acima. O Claude lê os arquivos atuais dela (`project/deck.json` e um `project/slides/<id>.html` por slide) antes de mudar qualquer coisa.
- **Nomes dos arquivos (ids) dos slides, na ordem:** `capa`, `ponto-partida`, `numeros`, `processo`, `o-site`, `entrada`, `linha-tempo`, `detalhe`, `fotos`, `pessoas`, `homenageados`, `destaques`, `busca`, `contribuir`, `ao-vivo`, `obrigado`.
- **Prints do site:** foram tirados do site publicado (`memorialdadufv.vercel.app`) com um Chrome automatizado, e o do acervo foi enviado pelo Eduardo. Se o site mudar e for preciso tirar prints novos, peça de novo ao Claude.
- **Limites do formato:**
  - O recuo (`padding`) vai no máximo até 256px.
  - As animações de entrada só funcionam em elementos com posição fixa.
  - As réplicas animadas (busca e formulário) não aceitam clique.
  - Fontes de 24px no mínimo.

## Pendências fora da apresentação

- **Commit e push:** as mudanças desta conversa ainda não foram commitadas, então não estão no site publicado:
  - créditos no rodapé;
  - página "Sobre o Memorial";
  - estilo dos cards;
  - notícias de 1996, 2002 e 2003 na linha do tempo;
  - correção do nome "Roberto de **Carvalho** Araújo" na página de Chefias.
- **Domínio oficial:** o pedido do subdomínio `memorial.dad.ufv.br` à DTI depende da declaração assinada pela chefia. Os registros DNS (CNAME e TXT) já estão configurados na Vercel e aguardam a DTI.
- **Dois documentos sem ano:** "Relação de Lotação" (estimado entre 1988 e 1995) e "O Planejamento Estratégico…" (provavelmente anterior a 1988) ainda não estão na linha do tempo.
