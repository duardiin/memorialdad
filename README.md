# Memorial DAD - UFV

Este projeto é um memorial histórico para o Departamento de Administração e Contabilidade da UFV.

## Como implantar manualmente

Este aplicativo foi construído usando **React + Vite** e utiliza o **Firebase** como backend para autenticação e banco de dados.

### 1. Configuração do Firebase

Para que o aplicativo funcione fora do ambiente do AI Studio, você deve configurar seu próprio projeto no Firebase:

1.  Vá para o [Console do Firebase](https://console.firebase.google.com/).
2.  Crie um novo projeto.
3.  Ative o **Authentication** (método Google).
4.  Ative o **Firestore Database**.
5.  No Firestore, crie as coleções `events` e `photos`.
6.  Aplique as regras de segurança contidas no arquivo `firestore.rules`.
7.  Adicione um aplicativo Web ao seu projeto Firebase para obter as credenciais.

### 2. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (ou configure as variáveis no seu provedor de hospedagem) com as seguintes chaves:

```env
VITE_FIREBASE_API_KEY=seu_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
VITE_FIREBASE_FIRESTORE_DATABASE_ID=(default)
```

### 3. Hospedagem

#### Vercel (Recomendado)
1.  Conecte seu repositório GitHub à Vercel.
2.  A Vercel detectará automaticamente que é um projeto Vite.
3.  Adicione as variáveis de ambiente acima nas configurações do projeto na Vercel.
4.  Clique em Deploy.

#### GitHub Pages
1.  Instale o pacote `gh-pages`: `npm install gh-pages --save-dev`.
2.  No `vite.config.ts`, adicione `base: '/nome-do-repositorio/'`.
3.  Adicione scripts de deploy no `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4.  Execute `npm run deploy`.

#### Supabase
O Supabase é uma alternativa ao Firebase. Se você desejar migrar para o Supabase, precisará:
1.  Criar um projeto no Supabase.
2.  Recriar as tabelas `events` e `photos`.
3.  Substituir o SDK do Firebase pelo SDK do Supabase no código (`src/firebase.ts` -> `src/supabase.ts`).
4.  Atualizar as chamadas de banco de dados no `src/App.tsx`.

#### 4. Executando Localmente

1.  Certifique-se de ter o **Node.js** instalado.
2.  Instale as dependências: `npm install`.
3.  Inicie o servidor de desenvolvimento: `npm run dev`.
4.  Abra `http://localhost:3000` no seu navegador.

---

## Como Exportar o Código

Para levar este código para o seu computador ou para um repositório Git:

1.  No menu do AI Studio Build, clique em **Settings** (ícone de engrenagem).
2.  Selecione **Export to GitHub** ou **Download as ZIP**.
3.  Se baixar como ZIP, extraia os arquivos e execute `npm install` no seu terminal.

---

**Nota:** O aplicativo exibirá um banner de aviso se as variáveis de ambiente do Firebase não forem encontradas. Isso ajuda a identificar problemas de configuração durante a implantação manual.

Desenvolvido para o Memorial DAD - UFV.
