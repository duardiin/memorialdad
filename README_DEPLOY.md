# Instruções para Deploy Manual no Firebase Hosting

Siga estes passos para hospedar seu Memorial DAD no seu próprio domínio usando o Firebase.

## 1. Preparação Local
Após baixar o arquivo ZIP ou exportar para o GitHub:
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale o Firebase CLI (se ainda não tiver):
   ```bash
   npm install -g firebase-tools
   ```

## 2. Autenticação e Build
No terminal, dentro da pasta do projeto:
1. Faça login no Firebase:
   ```bash
   firebase login
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Gere os arquivos de produção:
   ```bash
   npm run build
   ```

## 3. Deploy
Envie os arquivos para o Firebase:
```bash
firebase deploy
```

## 4. Configuração de Domínio e Autenticação
1. No [Console do Firebase](https://console.firebase.google.com/), vá em **Hosting** e clique em **"Adicionar domínio personalizado"**.
2. Siga as instruções de DNS do seu provedor (ex: Registro.br, GoDaddy).
3. **MUITO IMPORTANTE:** Vá em **Authentication** > **Settings** > **Authorized Domains** e adicione seu novo domínio (ex: `memorialdad.com.br`). Sem isso, o login do Google não funcionará.

---
*Nota: O arquivo `firebase.json` e `.firebaserc` já foram pré-configurados para você.*
