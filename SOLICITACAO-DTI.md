# Solicitação de hospedagem: Memorial DAD/UFV

| | |
|---|---|
| **Para** | Diretoria de Tecnologia da Informação (DTI) da UFV |
| **De** | Departamento de Administração e Contabilidade (DAD) do Centro de Ciências Humanas, Letras e Artes (CCH) |
| **Responsável técnico** | Eduardo Jesus, programador do Laboratório de Informática do DAD |
| **Contato** | dad@ufv.br · (31) 3612-7003 |
| **Data** | **[preencher]** |

---

## 1. O que pedimos

1. Hospedagem do site **Memorial DAD** no servidor da UFV.
2. Um subdomínio para o site, com ele na raiz. Sugestão: **`memorial.dad.ufv.br`**. Aceitamos outro nome, desde que o site não fique dentro de uma subpasta.
3. Certificado **HTTPS** para esse subdomínio.
4. Acesso **SFTP** para o DAD publicar as atualizações. De preferência, um acesso que também possa ser usado por publicação automática a partir do repositório no GitHub.

---

## 2. Sobre o site

O Memorial reúne a história do DAD desde 1974. Tem linha do tempo, galeria de fotos, vídeos com depoimentos, chefias, professores, técnicos e homenageados das colações de grau.

- **Visitantes:** só leitura, sem login.
- **Painel administrativo (`/admin`):** pessoas autorizadas do departamento entram com e-mail e senha para adicionar notícias, fotos e pessoas.
- **Identidade visual:** o logotipo da UFV segue o Manual de Identidade Visual (tamanho mínimo e área de proteção).
- **Versão atual, hospedada provisoriamente:** **[preencher com o link]**

---

## 3. Como funciona

| Parte | Tecnologia |
|---|---|
| Site | Arquivos estáticos (HTML, CSS e JavaScript) gerados com React e Vite. **Não precisa de Node.js no servidor.** |
| Painel administrativo | Um único arquivo PHP: `api/admin.php` |
| Armazenamento | Arquivos no próprio servidor. **Não usa banco de dados.** |
| Rotas | O site não usa rotas de URL, então dispensa regras de reescrita (`mod_rewrite`). Basta o `index.html` como página padrão. |
| Recursos externos | Somente o vídeo institucional, incorporado do YouTube (`youtube-nocookie.com`). |
| Tarefas no servidor | Nenhuma: sem cron, sem envio de e-mail e sem conexões de saída. |

---

## 4. Requisitos do servidor

| Item | Necessidade |
|---|---|
| PHP | **7.2 ou superior.** Foi testado em 7.4 e 8.2. Usa apenas funções padrão do PHP, sem extensões extras. |
| Permissão de escrita | Somente em duas pastas: `api/dados/` e `uploads/`. |
| `post_max_size` | Pelo menos **8 MB**. As fotos são comprimidas no navegador (até 1800 px, JPEG) e enviadas com no máximo 3 MB. |
| Espaço em disco | Cerca de **210 MB** no início, a maior parte fotos e vídeos. Cresce conforme o departamento envia fotos pelo painel, em geral menos de 1 MB por foto. |
| Backup | Incluir `api/dados/` (conteúdo do painel) e `uploads/` (fotos enviadas). |

---

## 5. Segurança e dados pessoais

**Acesso ao painel**
- As senhas são guardadas só como hash, com a função `password_hash` do PHP (argon2id quando disponível).
- A sessão é um cookie assinado com HMAC-SHA256, marcado como `HttpOnly`, `Secure` e `SameSite=Strict`, e vale por 12 horas.
- Cada tentativa de login com senha errada demora mais 0,6 s.
- O painel tem dois níveis de acesso: administrador e editor.
- As ações de envio aceitam apenas `application/json`.

**Envio de fotos**
- Aceita apenas JPG, PNG e WebP, conferidos pelo conteúdo do arquivo e não pela extensão.
- Limite de 3 MB por foto.
- O nome do arquivo é gerado pelo servidor, só com letras minúsculas, números e hífen. A extensão é definida pelo tipo detectado.
- As fotos são gravadas somente dentro de `uploads/`.

**Dados guardados no servidor**
- Ficam em `api/dados/`, protegida por `.htaccess`.
- Além disso, cada arquivo de dados começa com `<?php exit; ?>`, então nada é exibido mesmo que o `.htaccess` seja ignorado.
- Se a DTI preferir, essa pasta pode ficar **fora da área pública** (configuração `PASTA_DADOS`).

**Credenciais**
- Ficam em `api/config.php`, criado apenas no servidor e fora do repositório de código.

**Registro de alterações**
- O painel anota quem adicionou, alterou ou removeu cada item.
- Guarda as 100 versões anteriores de cada seção.

**Dados pessoais (LGPD)**
- O painel armazena nome, e-mail e hash da senha de quem edita.
- O site exibe nomes, fotos e contatos institucionais de docentes e técnicos do DAD, além de registros históricos públicos do departamento.

---

## 6. Instalação e manutenção

- **Instalação:** o passo a passo está no guia que acompanha este pedido, `HOSPEDAGEM-DTI.md`. Inclui a configuração, os testes e o que não deve ser sobrescrito.
- **Publicação:** o DAD gera o pacote do site (`npm run build:dti`) e envia por SFTP. As atualizações nunca substituem `api/config.php`, `api/dados/` nem `uploads/`.
- **Responsabilidade:** o conteúdo e a manutenção do código ficam com o DAD. O responsável técnico é Eduardo Jesus.

---

## 7. Resumo para resposta

| # | Item | Resposta da DTI |
|---|---|---|
| 1 | Subdomínio (sugestão: `memorial.dad.ufv.br`) | |
| 2 | HTTPS | |
| 3 | Versão do PHP disponível | |
| 4 | Escrita do PHP em `api/dados/` e `uploads/` | |
| 5 | `post_max_size` ≥ 8 MB | |
| 6 | Cota de disco (≈ 210 MB iniciais) | |
| 7 | Acesso SFTP, e se pode ser usado por publicação automática | |
| 8 | Backup de `api/dados/` e `uploads/` | |
| 9 | Pasta fora da área pública para os dados (opcional) | |

---

De acordo,

**[Nome da chefia do DAD]**
Chefe do Departamento de Administração e Contabilidade, UFV
