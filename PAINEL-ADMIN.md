# Painel Administrativo do Memorial DAD

O painel fica em **`/admin`** (ex.: `https://seu-site.vercel.app/admin`) e permite adicionar
conteúdo ao memorial sem mexer em código:

- **Notícias** da linha do tempo (por ano, com fotos e links)
- **Galeria de fotos**
- **Pessoas**: chefias, professores titulares, professores atuais e técnicos
- **Homenageados** das colações de grau

Não há custo: o conteúdo fica no próprio repositório do GitHub e o site é publicado pela Vercel.

---

## Para quem vai usar o painel

1. Acesse `/admin` e entre com seu e-mail e senha.
2. Escolha a seção, clique em **Adicionar**, preencha e envie as fotos.
3. Clique em **Salvar e publicar**. A mudança aparece no site em **cerca de 2 minutos**.

- As fotos são reduzidas automaticamente antes do envio.
- O painel mostra apenas o que foi adicionado por ele. O conteúdo que já existia no memorial
  continua no site, mas não aparece no painel para edição.
- Esqueceu a senha? Um administrador redefine em **Quem tem acesso**.
- **Editores** adicionam e editam conteúdo. **Administradores** também cadastram pessoas.

---

## Configuração (feita uma única vez)

### 1. Criar o token do GitHub

O painel precisa de permissão para gravar no repositório.

1. No GitHub, com a conta dona do repositório: **Settings → Developer settings →
   Personal access tokens → Fine-grained tokens → Generate new token**.
2. **Repository access**: *Only select repositories* → escolha o repositório do memorial.
3. **Permissions → Repository permissions → Contents**: *Read and write*.
4. Escolha a maior validade disponível e **anote a data de vencimento**. Quando vencer, o painel
   passa a mostrar "Não foi possível salvar agora": basta gerar um token novo e trocar na Vercel.

### 2. Configurar as variáveis na Vercel

No projeto da Vercel: **Settings → Environment Variables** (ambiente *Production*):

| Variável | O que colocar |
|---|---|
| `ADMIN_SECRET` | Texto aleatório longo. Gere com `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `ADMIN_EMAIL` | E-mail da conta principal (de preferência o e-mail institucional do DAD) |
| `ADMIN_PASSWORD` | Senha forte da conta principal |
| `GITHUB_TOKEN` | O token criado no passo 1 |
| `GITHUB_REPO` | `dono/repositorio` (ex.: `duardiin/memorialdad`) |
| `GITHUB_BRANCH` | `main` |

Depois, faça um novo deploy (**Deployments → ⋯ → Redeploy**) para as variáveis valerem.

### 3. Cadastrar as pessoas

Entre em `/admin` com a conta principal e use **Quem tem acesso → Dar acesso a alguém**.
A conta principal é a forma de recuperar o acesso caso todas as outras senhas se percam.

---

## Passagem do projeto para outra pessoa

Para que o memorial não dependa de uma conta pessoal:

1. Transfira o repositório do GitHub e o projeto da Vercel para uma conta ligada a um
   **e-mail institucional** (ex.: do DAD).
2. Gere um novo `GITHUB_TOKEN` a partir dessa conta e atualize na Vercel.
3. Troque `ADMIN_EMAIL` / `ADMIN_PASSWORD` para os dados da nova pessoa responsável.

**Não troque o `ADMIN_SECRET`**: ele protege a lista de usuários. Se for trocado, as contas
criadas no painel param de funcionar (a conta principal continua e pode recadastrá-las).

---

## Detalhes técnicos

- **Onde fica o conteúdo novo**: `src/content/*.json` (textos) e `public/uploads/` (fotos).
  Os arquivos originais em `src/data/*.ts` não são alterados; `src/data/conteudo.ts` junta tudo
  para o site.
- **Como grava**: a função `api/admin.ts` (Vercel) cria um commit no repositório via API do
  GitHub para cada alteração; a Vercel publica o site de novo automaticamente.
- **Usuários**: `admin-data/usuarios.json`, criptografado com `ADMIN_SECRET` (senhas com scrypt).
  Não edite esse arquivo à mão.
- **Antes de editar o código localmente, rode `git pull`**: o painel faz commits direto na
  branch `main`.
- **Testar no computador**: crie `.env.local` com `ADMIN_SECRET`, `ADMIN_EMAIL` e `ADMIN_PASSWORD`
  (sem `GITHUB_TOKEN`), rode `npm run dev` e acesse `http://localhost:3000/admin/`. Nesse modo o
  painel grava direto nos arquivos locais.
