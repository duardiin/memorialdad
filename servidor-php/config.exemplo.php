<?php
/**
 * Configuração do Painel Administrativo no servidor da UFV.
 *
 * Como usar: copie este arquivo para "config.php" (na mesma pasta, api/) e preencha.
 * O config.php fica só no servidor: nunca envie para o GitHub.
 * Veja HOSPEDAGEM-DTI.md.
 */
return [
    // Texto aleatório com pelo menos 32 caracteres (assina o login).
    // Pode gerar em https://www.random.org/strings/ ou com: php -r "echo bin2hex(random_bytes(32));"
    // ATENÇÃO: se for trocado, todos precisam entrar de novo no painel (as senhas continuam valendo).
    'ADMIN_SECRET' => '',

    // Conta principal: sempre funciona e serve para recuperar o acesso.
    // De preferência o e-mail institucional do DAD.
    'ADMIN_EMAIL' => '',
    'ADMIN_PASSWORD' => '',

    // Pasta onde o painel guarda conteúdo, usuários, histórico e registro de alterações.
    // Precisa de permissão de escrita. Se a DTI oferecer uma pasta fora da área pública
    // do site, use-a aqui (ex.: '/home/memorial/dados-painel'). Padrão: api/dados
    'PASTA_DADOS' => __DIR__ . '/dados',

    // Pasta pública do site (onde fica o index.html). As fotos vão para <esta pasta>/uploads,
    // que também precisa de permissão de escrita. Padrão: a pasta acima de api/
    'PASTA_SITE' => dirname(__DIR__),
];
