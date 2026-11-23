# Hospedagem do Memorial DAD no servidor da UFV (DTI)

Nesta versão, o site **e** o Painel Administrativo (`/admin`) ficam no servidor da UFV.
O painel grava os dados no próprio servidor, em PHP, sem GitHub, sem Vercel e sem banco de dados.
Para quem usa o painel, nada muda. A única diferença é que as alterações aparecem no site **na hora**.

---

## 1. O que solicitar à DTI

| Item | Necessidade |
|---|---|
| Endereço | Um subdomínio próprio, com o site na **raiz** (ex.: `memorial.dad.ufv.br`). O site não funciona dentro de uma subpasta como `ufv.br/memorial/`. |
| PHP | Versão **7.2 ou superior**. Não precisa de banco de dados nem de extensões extras. |
| HTTPS | Certificado ativo no subdomínio. |
| Permissão de escrita | O PHP precisa gravar em duas pastas: `api/dados/` e `uploads/`. |
| Limite de envio | `post_max_size` de pelo menos **8 MB** (cada foto vai com até 3 MB). |
| Espaço em disco | Cerca de **300 MB** no início, que crescem com as fotos enviadas pelo painel. |
| Acesso para publicar | SFTP ou FTP. |
| Backup | Que as pastas `api/dados/` e `uploads/` entrem no backup do servidor. |

> Opcional: se a DTI oferecer uma pasta **fora** da área pública do site, ela pode guardar os
> dados do painel (configuração `PASTA_DADOS`, no passo 3).

---

## 2. Gerar o pacote

No computador, dentro da pasta do projeto:

```bash
npm run build:dti
```

O resultado fica em **`dist-dti/`**: o site, o painel e a pasta `api/` com o PHP.

---

## 3. Primeira instalação

1. Envie **o conteúdo** da pasta `dist-dti/` para a raiz do subdomínio.
   Use um programa de SFTP configurado em UTF-8 (ex.: FileZilla), porque várias fotos têm
   acentos e aspas no nome.
2. No servidor, copie `api/config.exemplo.php` para **`api/config.php`** e preencha:
   - `ADMIN_SECRET`: texto aleatório com pelo menos 32 caracteres.
   - `ADMIN_EMAIL` e `ADMIN_PASSWORD`: a conta principal, de preferência o e-mail institucional do DAD.
3. Garanta que o PHP possa gravar em `api/dados/` e `uploads/`. Se as pastas não existirem,
   o painel cria as duas sozinho, desde que tenha permissão na pasta do site.
4. Teste:
   - Abra `https://SEU-ENDERECO/api/admin.php?acao=publico`. O esperado é um texto
     começando com `{"noticias":[`. Se aparecer uma mensagem de erro, ela diz o que falta.
   - Abra `https://SEU-ENDERECO/admin/` e entre com a conta principal.
   - Adicione uma foto de teste na Galeria, confira no site e exclua.
5. Em **Quem tem acesso**, cadastre as pessoas que vão editar o memorial.

---

## 4. Atualizar o site depois

Sempre que o código mudar, gere o pacote de novo (`npm run build:dti`) e envie o conteúdo de
`dist-dti/`. **Não apague nem substitua** estes itens no servidor:

- `api/config.php`: senhas e chave
- `api/dados/`: conteúdo do painel, usuários e histórico
- `uploads/`: fotos enviadas pelo painel

Se o programa de SFTP perguntar, escolha **não sobrescrever** esses itens.

---

## 5. Onde ficam os dados

| Caminho no servidor | Conteúdo |
|---|---|
| `api/dados/conteudo/` | Itens adicionados pelo painel (notícias, galeria, pessoas, homenageados) |
| `api/dados/usuarios.php` | Contas do painel. As senhas são guardadas com hash, nunca em texto. |
| `api/dados/historico/` | As 100 versões anteriores de cada seção, para recuperar algo apagado por engano |
| `api/dados/registro.php` | Quem adicionou, alterou ou removeu cada item, e quando |
| `uploads/` | Fotos enviadas pelo painel |

Os arquivos de dados são protegidos: mesmo se alguém tentar abri-los pelo navegador, nada aparece.

**Esqueceu a senha?** Um administrador redefine em **Quem tem acesso**. Para a conta principal,
troque `ADMIN_PASSWORD` em `api/config.php`.

---

## 6. Conteúdo vindo da versão da Vercel

O que já tiver sido adicionado pelo painel da Vercel (arquivos `src/content/*.json`) vai junto
no pacote, em `api/conteudo-inicial/`, e aparece no site desde o primeiro acesso.
A partir do primeiro "Salvar" de cada seção no servidor, passa a valer o que está em `api/dados/`.
