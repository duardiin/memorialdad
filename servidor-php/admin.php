<?php
/**
 * API do Painel Administrativo — versão PHP, para a hospedagem da DTI/UFV.
 *
 * Faz o mesmo que a função da Vercel (api/admin.ts), mas grava tudo no próprio servidor,
 * sem GitHub e sem banco de dados. Funciona em PHP 7.2 ou superior, sem extensões extras.
 *
 * GET  admin.php?acao=publico | sessao | conteudo&colecao=... | usuarios
 * POST admin.php  { acao: 'entrar' | 'sair' | 'enviarFoto' | 'salvar' | 'excluir'
 *                       | 'salvarUsuario' | 'excluirUsuario' | 'trocarSenha', ... }
 *
 * Onde fica cada coisa (ver HOSPEDAGEM-DTI.md):
 * - api/config.php ........ senhas e chave secreta (criado no servidor, nunca vai para o GitHub)
 * - api/dados/ ............ conteúdo, usuários, histórico e registro de alterações
 * - uploads/ .............. fotos enviadas pelo painel (pasta pública do site)
 */

ini_set('display_errors', '0');
error_reporting(E_ALL);
date_default_timezone_set('America/Sao_Paulo');

const NOMES_COLECOES = ['noticias', 'galeria', 'chefes', 'professoresTitulares', 'professoresAtuais', 'tecnicos', 'homenageados'];
const ROTULOS = [
    'noticias' => 'notícia',
    'galeria' => 'foto da galeria',
    'chefes' => 'chefia',
    'professoresTitulares' => 'professor(a) titular',
    'professoresAtuais' => 'professor(a)',
    'tecnicos' => 'técnico(a)',
    'homenageados' => 'colação de grau',
];
const ANO_INICIAL = 1974;
const TAMANHO_MAXIMO_FOTO = 3 * 1024 * 1024;
const DURACAO_SESSAO = 12 * 60 * 60;
const COOKIE = 'memorial_admin';
const PADRAO_URL_FOTO = '#^/uploads/[a-z0-9-]+(/[a-z0-9-]+)*\.(jpg|png|webp)$#D';
/** Impede que os arquivos de dados sejam lidos pelo navegador, mesmo se o .htaccess for ignorado. */
const GUARDA = "<?php exit; ?>\n";
const VERSOES_NO_HISTORICO = 100;

class ErroAcesso extends Exception
{
    public $status;

    public function __construct($mensagem, $status = 401)
    {
        parent::__construct($mensagem);
        $this->status = $status;
    }
}

class ErroValidacao extends Exception
{
}

/** Falta configurar algo no servidor: a mensagem é mostrada como está. */
class ErroConfiguracao extends Exception
{
}

class ErroArmazenamento extends Exception
{
}

// ---------------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------------

function v($lista, $chave)
{
    return is_array($lista) && array_key_exists($chave, $lista) ? $lista[$chave] : null;
}

/** Equivalente ao "valor verdadeiro" do JavaScript, para manter as mesmas regras da versão da Vercel. */
function verdadeiro($valor)
{
    return $valor !== null && $valor !== false && $valor !== '' && $valor !== 0 && $valor !== 0.0;
}

function tamanho($texto)
{
    return (int) preg_match_all('/./us', $texto);
}

function aparar($texto)
{
    return preg_replace('/^[\s\x{00A0}\x{FEFF}]+|[\s\x{00A0}\x{FEFF}]+$/u', '', $texto);
}

function cortar($texto, $max)
{
    return function_exists('mb_substr') ? mb_substr($texto, 0, $max, 'UTF-8') : implode('', array_slice(preg_split('//u', $texto, -1, PREG_SPLIT_NO_EMPTY), 0, $max));
}

function minusculas($texto)
{
    return function_exists('mb_strtolower') ? mb_strtolower($texto, 'UTF-8') : strtolower($texto);
}

function ehLista($valor)
{
    return is_array($valor) && ($valor === [] || array_keys($valor) === range(0, count($valor) - 1));
}

function b64url($dados)
{
    return rtrim(strtr(base64_encode($dados), '+/', '-_'), '=');
}

function deB64url($texto)
{
    $texto = strtr($texto, '-_', '+/');
    $resto = strlen($texto) % 4;
    if ($resto) {
        $texto .= str_repeat('=', 4 - $resto);
    }
    return base64_decode($texto, true);
}

function sufixo()
{
    return bin2hex(random_bytes(4));
}

function agoraIso()
{
    $agora = microtime(true);
    return gmdate('Y-m-d\TH:i:s', (int) $agora) . sprintf('.%03dZ', (int) (($agora - floor($agora)) * 1000));
}

function novoUuid()
{
    $bytes = random_bytes(16);
    $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
    $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
    $hex = bin2hex($bytes);
    return substr($hex, 0, 8) . '-' . substr($hex, 8, 4) . '-' . substr($hex, 12, 4) . '-' . substr($hex, 16, 4) . '-' . substr($hex, 20);
}

function paraSlug($texto, $max = 40)
{
    if (class_exists('Normalizer')) {
        $decomposto = Normalizer::normalize($texto, Normalizer::FORM_D);
        if (is_string($decomposto)) {
            $texto = preg_replace('/[\x{0300}-\x{036f}]/u', '', $decomposto);
        }
    } else {
        $texto = strtr($texto, [
            'á' => 'a', 'à' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a',
            'Á' => 'A', 'À' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A', 'Å' => 'A',
            'é' => 'e', 'è' => 'e', 'ê' => 'e', 'ë' => 'e', 'É' => 'E', 'È' => 'E', 'Ê' => 'E', 'Ë' => 'E',
            'í' => 'i', 'ì' => 'i', 'î' => 'i', 'ï' => 'i', 'Í' => 'I', 'Ì' => 'I', 'Î' => 'I', 'Ï' => 'I',
            'ó' => 'o', 'ò' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'Ó' => 'O', 'Ò' => 'O', 'Ô' => 'O', 'Õ' => 'O', 'Ö' => 'O',
            'ú' => 'u', 'ù' => 'u', 'û' => 'u', 'ü' => 'u', 'Ú' => 'U', 'Ù' => 'U', 'Û' => 'U', 'Ü' => 'U',
            'ç' => 'c', 'Ç' => 'C', 'ñ' => 'n', 'Ñ' => 'N', 'ý' => 'y', 'ÿ' => 'y', 'Ý' => 'Y',
        ]);
    }
    $texto = strtolower($texto);
    $texto = preg_replace('/[^a-z0-9]+/', '-', $texto);
    $texto = trim($texto, '-');
    $texto = rtrim(substr($texto, 0, $max), '-');
    return $texto === '' ? 'item' : $texto;
}

// ---------------------------------------------------------------------------
// Configuração e pastas
// ---------------------------------------------------------------------------

function config($nome)
{
    static $valores = null;
    if ($valores === null) {
        $arquivo = __DIR__ . '/config.php';
        if (!is_file($arquivo)) {
            throw new ErroConfiguracao('Painel não configurado: crie o arquivo api/config.php a partir de api/config.exemplo.php (veja HOSPEDAGEM-DTI.md).');
        }
        $valores = require $arquivo;
        if (!is_array($valores)) {
            throw new ErroConfiguracao('O arquivo api/config.php está em formato inválido. Copie de novo a partir de api/config.exemplo.php.');
        }
    }
    return array_key_exists($nome, $valores) ? $valores[$nome] : null;
}

function segredo()
{
    $valor = config('ADMIN_SECRET');
    if (!is_string($valor) || strlen($valor) < 32) {
        throw new ErroConfiguracao('Painel não configurado: defina ADMIN_SECRET (mínimo de 32 caracteres) em api/config.php.');
    }
    return $valor;
}

function criarPasta($pasta)
{
    if (!is_dir($pasta) && !@mkdir($pasta, 0755, true) && !is_dir($pasta)) {
        throw new ErroConfiguracao('O servidor não permite criar a pasta "' . basename($pasta) . '". Peça à DTI permissão de escrita (veja HOSPEDAGEM-DTI.md).');
    }
}

function pastaDados()
{
    static $pasta = null;
    if ($pasta !== null) {
        return $pasta;
    }
    $configurada = config('PASTA_DADOS');
    $pasta = rtrim(is_string($configurada) && $configurada !== '' ? $configurada : __DIR__ . '/dados', '/\\');
    criarPasta($pasta);
    // Proteção extra caso a pasta fique dentro da área pública do site
    if (!is_file($pasta . '/.htaccess')) {
        @file_put_contents(
            $pasta . '/.htaccess',
            "<IfModule mod_authz_core.c>\n  Require all denied\n</IfModule>\n<IfModule !mod_authz_core.c>\n  Order allow,deny\n  Deny from all\n</IfModule>\n"
        );
        @file_put_contents($pasta . '/index.html', '');
    }
    return $pasta;
}

function pastaSite()
{
    $configurada = config('PASTA_SITE');
    return rtrim(is_string($configurada) && $configurada !== '' ? $configurada : dirname(__DIR__), '/\\');
}

function caminhoDaFoto($url)
{
    // $url já foi conferida com PADRAO_URL_FOTO: começa com /uploads/ e não tem ".."
    return pastaSite() . $url;
}

// ---------------------------------------------------------------------------
// Armazenamento em arquivos
// ---------------------------------------------------------------------------

function lerDados($nome)
{
    $arquivo = pastaDados() . '/' . $nome . '.php';
    if (!is_file($arquivo)) {
        return null;
    }
    $conteudo = file_get_contents($arquivo);
    if ($conteudo === false) {
        throw new ErroArmazenamento("Não foi possível ler $nome");
    }
    if (strpos($conteudo, GUARDA) === 0) {
        $conteudo = substr($conteudo, strlen(GUARDA));
    }
    $dados = json_decode($conteudo, true);
    if (!is_array($dados)) {
        throw new ErroArmazenamento("O arquivo $nome está corrompido");
    }
    return $dados;
}

function escreverArquivo($arquivo, $conteudo)
{
    criarPasta(dirname($arquivo));
    $temporario = $arquivo . '.' . sufixo() . '.tmp';
    if (@file_put_contents($temporario, $conteudo) === false) {
        throw new ErroConfiguracao('O servidor não permite gravar na pasta de dados do painel. Peça à DTI permissão de escrita (veja HOSPEDAGEM-DTI.md).');
    }
    if (!@rename($temporario, $arquivo)) {
        @unlink($temporario);
        throw new ErroArmazenamento("Não foi possível gravar $arquivo");
    }
}

function gravarDados($nome, $dados, $guardarHistorico)
{
    $arquivo = pastaDados() . '/' . $nome . '.php';
    $json = json_encode($dados, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    if ($json === false) {
        throw new ErroArmazenamento("Não foi possível converter $nome");
    }
    if ($guardarHistorico && is_file($arquivo)) {
        $pastaHistorico = pastaDados() . '/historico/' . str_replace('/', '-', $nome);
        criarPasta($pastaHistorico);
        @copy($arquivo, $pastaHistorico . '/' . date('Ymd-His') . '-' . sufixo() . '.php');
        $versoes = glob($pastaHistorico . '/*.php') ?: [];
        sort($versoes);
        foreach (array_slice($versoes, 0, max(0, count($versoes) - VERSOES_NO_HISTORICO)) as $antiga) {
            @unlink($antiga);
        }
    }
    escreverArquivo($arquivo, GUARDA . $json . "\n");
}

/** Lê, altera e grava sem que duas pessoas salvando ao mesmo tempo atrapalhem uma à outra. */
function comTrava(callable $operacao)
{
    $trava = @fopen(pastaDados() . '/.trava', 'c');
    if (!$trava || !flock($trava, LOCK_EX)) {
        throw new ErroConfiguracao('O servidor não permite gravar na pasta de dados do painel. Peça à DTI permissão de escrita (veja HOSPEDAGEM-DTI.md).');
    }
    try {
        return $operacao();
    } finally {
        flock($trava, LOCK_UN);
        fclose($trava);
    }
}

function registrar($usuario, $texto)
{
    $arquivo = pastaDados() . '/registro.php';
    $linha = date('Y-m-d H:i:s') . "\t" . $usuario['nome'] . ' <' . $usuario['email'] . ">\t" . str_replace(["\r", "\n"], ' ', $texto) . "\n";
    if (!is_file($arquivo)) {
        @file_put_contents($arquivo, GUARDA);
    }
    @file_put_contents($arquivo, $linha, FILE_APPEND | LOCK_EX);
}

function lerLista($colecao)
{
    $dados = lerDados('conteudo/' . $colecao);
    if ($dados === null) {
        // Conteúdo que veio junto com o site (adicionado pelo painel antes da mudança para a DTI)
        $inicial = __DIR__ . '/conteudo-inicial/' . $colecao . '.json';
        $dados = is_file($inicial) ? json_decode((string) file_get_contents($inicial), true) : [];
    }
    return is_array($dados) ? array_values($dados) : [];
}

function gravarLista($colecao, $lista)
{
    gravarDados('conteudo/' . $colecao, array_values($lista), true);
}

// ---------------------------------------------------------------------------
// Validação (mesmas regras de api/_lib/colecoes.ts)
// ---------------------------------------------------------------------------

function texto($valor, $campo, $obrigatorio = false, $max = 300)
{
    if ($valor !== null && !is_string($valor)) {
        throw new ErroValidacao("O campo \"$campo\" é inválido.");
    }
    $limpo = is_string($valor) ? aparar($valor) : '';
    if ($obrigatorio && $limpo === '') {
        throw new ErroValidacao("Preencha o campo \"$campo\".");
    }
    if (tamanho($limpo) > $max) {
        throw new ErroValidacao("O campo \"$campo\" passou do limite de $max caracteres.");
    }
    return $limpo;
}

function linkExterno($valor, $campo)
{
    $limpo = texto($valor, $campo, false, 2000);
    if ($limpo !== '' && !preg_match('#^https?://\S+$#iuD', $limpo)) {
        throw new ErroValidacao("O link em \"$campo\" precisa começar com http:// ou https://");
    }
    return $limpo;
}

function urlFoto($valor, $campo, $obrigatorio)
{
    $limpo = texto($valor, $campo, $obrigatorio, 300);
    if ($limpo !== '' && !preg_match(PADRAO_URL_FOTO, $limpo)) {
        throw new ErroValidacao("A foto em \"$campo\" é inválida. Envie de novo.");
    }
    return $limpo;
}

function inteiro($valor, $campo, $min, $max)
{
    $numero = $valor;
    if (is_string($valor)) {
        $aparado = trim($valor);
        $numero = is_numeric($aparado) ? $aparado + 0 : null;
    }
    if (is_float($numero) && is_finite($numero) && floor($numero) == $numero && abs($numero) < 1e15) {
        $numero = (int) $numero;
    }
    if (!is_int($numero) || $numero < $min || $numero > $max) {
        throw new ErroValidacao("Informe um ano válido em \"$campo\" (entre $min e $max).");
    }
    return $numero;
}

function lista($valor, $campo, $max, callable $item)
{
    if ($valor === null) {
        return [];
    }
    if (!ehLista($valor)) {
        throw new ErroValidacao("O campo \"$campo\" é inválido.");
    }
    if (count($valor) > $max) {
        throw new ErroValidacao("\"$campo\" aceita no máximo $max itens.");
    }
    $resultado = [];
    foreach ($valor as $elemento) {
        $resultado[] = $item($elemento);
    }
    return $resultado;
}

function linhas($valor, $campo, $max = 60)
{
    $itens = lista($valor, $campo, $max, function ($elemento) use ($campo) {
        return texto($elemento, $campo, false, 400);
    });
    return array_values(array_filter($itens, function ($linha) {
        return $linha !== '';
    }));
}

function objeto($valor)
{
    return is_array($valor) ? $valor : [];
}

function anoMaximo()
{
    return (int) date('Y') + 1;
}

function ehColecao($nome)
{
    return is_string($nome) && in_array($nome, NOMES_COLECOES, true);
}

function validarItem($colecao, $e)
{
    switch ($colecao) {
        case 'noticias':
            return [
                'year' => inteiro(v($e, 'year'), 'Ano', ANO_INICIAL, anoMaximo()),
                'tag' => '',
                'title' => texto(v($e, 'title'), 'Título', true, 250),
                'desc' => texto(v($e, 'desc'), 'Texto da notícia', true, 10000),
                'photos' => lista(v($e, 'photos'), 'Fotos', 30, function ($x) {
                    $f = objeto($x);
                    return ['url' => urlFoto(v($f, 'url'), 'Fotos', true), 'caption' => texto(v($f, 'caption'), 'Legenda da foto', false, 400)];
                }),
                'externalLinks' => lista(v($e, 'externalLinks'), 'Links', 20, function ($x) {
                    $l = objeto($x);
                    $rotulo = texto(v($l, 'label'), 'Nome do link', true, 150);
                    $url = linkExterno(v($l, 'url'), 'Endereço do link');
                    if ($url === '') {
                        throw new ErroValidacao('Preencha o endereço do link.');
                    }
                    return ['label' => $rotulo, 'url' => $url];
                }),
                'articleUrl' => linkExterno(v($e, 'articleUrl'), 'Link da matéria'),
            ];

        case 'galeria':
            return [
                'url' => urlFoto(v($e, 'url'), 'Foto', true),
                'title' => texto(v($e, 'title'), 'Título', true, 200),
                'caption' => texto(v($e, 'caption'), 'Legenda', false, 600),
                'colorida' => v($e, 'colorida') !== false,
            ];

        case 'chefes':
            $item = [
                'nome' => texto(v($e, 'nome'), 'Nome', true, 200),
                'periodoInicio' => texto(v($e, 'periodoInicio'), 'Início', true, 40),
                'periodoFim' => texto(v($e, 'periodoFim'), 'Fim', false, 40),
                'cargo' => texto(v($e, 'cargo'), 'Cargo', false, 150),
                'foto' => urlFoto(v($e, 'foto'), 'Foto', false),
                'observacoes' => texto(v($e, 'observacoes'), 'Observações', false, 2000),
            ];
            if ($item['periodoFim'] === '') {
                $item['periodoFim'] = null;
            }
            return $item;

        case 'professoresTitulares':
            return [
                'nome' => texto(v($e, 'nome'), 'Nome', true, 200),
                'periodoInicio' => inteiro(v($e, 'periodoInicio'), 'Ano em que se tornou titular', ANO_INICIAL, anoMaximo()),
                'cargo' => texto(v($e, 'cargo'), 'Cargo', false, 150),
                'foto' => urlFoto(v($e, 'foto'), 'Foto', false),
                'observacoes' => texto(v($e, 'observacoes'), 'Observações', false, 2000),
            ];

        case 'professoresAtuais':
            return [
                'nome' => texto(v($e, 'nome'), 'Nome', true, 200),
                'email' => texto(v($e, 'email'), 'E-mail', false, 200),
                'telefone' => texto(v($e, 'telefone'), 'Telefone', false, 60),
                'formacao' => linhas(v($e, 'formacao'), 'Formação', 20),
                'foto' => urlFoto(v($e, 'foto'), 'Foto', false),
                'observacoes' => texto(v($e, 'observacoes'), 'Observações', false, 2000),
            ];

        case 'tecnicos':
            return [
                'nome' => texto(v($e, 'nome'), 'Nome', true, 200),
                'email' => texto(v($e, 'email'), 'E-mail', false, 200),
                'telefone' => texto(v($e, 'telefone'), 'Telefone', false, 60),
                'foto' => urlFoto(v($e, 'foto'), 'Foto', false),
            ];

        case 'homenageados':
            $grupos = lista(v($e, 'grupos'), 'Homenageados', 6, function ($x) {
                $g = objeto($x);
                $curso = texto(v($g, 'curso'), 'Curso', false, 120);
                $grupo = [];
                if ($curso !== '') {
                    $grupo['curso'] = $curso;
                }
                $grupo['linhas'] = linhas(v($g, 'linhas'), 'Homenageados', 80);
                return $grupo;
            });
            $grupos = array_values(array_filter($grupos, function ($g) {
                return count($g['linhas']) > 0;
            }));
            if (!$grupos) {
                throw new ErroValidacao('Informe pelo menos um homenageado.');
            }
            $nota = texto(v($e, 'nota'), 'Observação', false, 1000);
            $item = [
                'ano' => inteiro(v($e, 'ano'), 'Ano', ANO_INICIAL, anoMaximo()),
                'data' => texto(v($e, 'data'), 'Data', true, 80),
                'grupos' => $grupos,
            ];
            if ($nota !== '') {
                $item['nota'] = $nota;
            }
            return $item;
    }
    throw new ErroValidacao('Seção desconhecida.');
}

function fotosDoItem($colecao, $item)
{
    if ($colecao === 'noticias') {
        $urls = [];
        foreach (is_array(v($item, 'photos')) ? $item['photos'] : [] as $foto) {
            if (is_string(v($foto, 'url'))) {
                $urls[] = $foto['url'];
            }
        }
        return $urls;
    }
    if ($colecao === 'galeria') {
        return is_string(v($item, 'url')) ? [$item['url']] : [];
    }
    if ($colecao === 'homenageados') {
        return [];
    }
    return verdadeiro(v($item, 'foto')) ? [$item['foto']] : [];
}

function tituloDoItem($colecao, $item)
{
    if ($colecao === 'noticias' || $colecao === 'galeria') {
        return $item['title'];
    }
    if ($colecao === 'homenageados') {
        return 'Colação de ' . $item['data'];
    }
    return $item['nome'];
}

// ---------------------------------------------------------------------------
// Usuários, senhas e sessão (mesmas regras de api/_lib/autenticacao.ts)
// ---------------------------------------------------------------------------

function lerUsuarios()
{
    $dados = lerDados('usuarios');
    return $dados === null ? [] : array_values($dados);
}

function gravarUsuarios($usuarios)
{
    gravarDados('usuarios', array_values($usuarios), false);
}

function usuarioPrincipal()
{
    $email = minusculas(trim((string) config('ADMIN_EMAIL')));
    $senha = config('ADMIN_PASSWORD');
    if ($email === '' || !is_string($senha) || $senha === '') {
        return null;
    }
    return ['id' => 'principal', 'nome' => 'Conta principal', 'email' => $email, 'papel' => 'admin', 'principal' => true];
}

function paraPublico($usuario)
{
    return ['id' => $usuario['id'], 'nome' => $usuario['nome'], 'email' => $usuario['email'], 'papel' => $usuario['papel']];
}

function gerarHashSenha($senha)
{
    return password_hash($senha, defined('PASSWORD_ARGON2ID') ? PASSWORD_ARGON2ID : PASSWORD_DEFAULT);
}

function validarNovaSenha($senha)
{
    if (!is_string($senha) || tamanho($senha) < 8) {
        throw new ErroAcesso('A senha precisa ter pelo menos 8 caracteres.', 400);
    }
    if (tamanho($senha) > 200) {
        throw new ErroAcesso('Senha muito longa.', 400);
    }
    return $senha;
}

function versaoSenha($hash)
{
    return substr(b64url(hash('sha256', $hash, true)), 0, 12);
}

/** Muda se ADMIN_PASSWORD mudar, encerrando as sessões antigas da conta principal. */
function hashPrincipal()
{
    return base64_encode(hash('sha256', 'principal:' . config('ADMIN_PASSWORD'), true));
}

function assinar($texto)
{
    return b64url(hash_hmac('sha256', $texto, 'sessao:' . segredo(), true));
}

function criarToken($id, $hashSenha)
{
    $corpo = b64url(json_encode(['id' => $id, 'versao' => versaoSenha($hashSenha), 'expira' => time() + DURACAO_SESSAO]));
    return $corpo . '.' . assinar($corpo);
}

function lerToken($token)
{
    $partes = explode('.', $token);
    if (count($partes) !== 2 || $partes[0] === '' || $partes[1] === '' || !hash_equals(assinar($partes[0]), $partes[1])) {
        return null;
    }
    $dados = json_decode((string) deB64url($partes[0]), true);
    if (!is_array($dados) || !is_string(v($dados, 'id')) || !is_string(v($dados, 'versao')) || !is_int(v($dados, 'expira'))) {
        return null;
    }
    return $dados['expira'] > time() ? $dados : null;
}

function usandoHttps()
{
    if (!empty($_SERVER['HTTPS']) && strtolower((string) $_SERVER['HTTPS']) !== 'off') {
        return true;
    }
    if (strtolower((string) v($_SERVER, 'HTTP_X_FORWARDED_PROTO')) === 'https') {
        return true;
    }
    return (string) v($_SERVER, 'SERVER_PORT') === '443';
}

function atributosCookie()
{
    // O cookie vale só para a pasta desta API (normalmente /api)
    $caminho = rtrim(str_replace('\\', '/', dirname((string) (v($_SERVER, 'SCRIPT_NAME') ?: '/api/admin.php'))), '/');
    return 'Path=' . ($caminho === '' ? '/' : $caminho) . '; HttpOnly; SameSite=Strict' . (usandoHttps() ? '; Secure' : '');
}

function cookieSessao($id, $hashSenha)
{
    return COOKIE . '=' . criarToken($id, $hashSenha) . '; Max-Age=' . DURACAO_SESSAO . '; ' . atributosCookie();
}

function cookieSaida()
{
    return COOKIE . '=; Max-Age=0; ' . atributosCookie();
}

function entrar($email, $senha)
{
    if (!is_string($email) || !is_string($senha)) {
        throw new ErroAcesso('Informe e-mail e senha.', 400);
    }
    $emailNormalizado = minusculas(trim($email));

    $principal = usuarioPrincipal();
    if ($principal && $emailNormalizado === $principal['email']) {
        if (hash_equals(hash('sha256', (string) config('ADMIN_PASSWORD')), hash('sha256', $senha))) {
            return [$principal, hashPrincipal()];
        }
    } else {
        foreach (lerUsuarios() as $usuario) {
            if ($usuario['email'] === $emailNormalizado) {
                if (password_verify($senha, $usuario['senhaHash'])) {
                    return [paraPublico($usuario), $usuario['senhaHash']];
                }
                break;
            }
        }
    }

    segredo(); // garante a mensagem de "não configurado" em vez de "senha incorreta"
    usleep(600000);
    throw new ErroAcesso('E-mail ou senha incorretos.');
}

/** Confere o cookie e devolve o usuário logado (ou lança ErroAcesso). */
function exigirUsuario($papel = null)
{
    $token = isset($_COOKIE[COOKIE]) && is_string($_COOKIE[COOKIE]) ? $_COOKIE[COOKIE] : '';
    $sessao = $token !== '' ? lerToken($token) : null;
    if (!$sessao) {
        throw new ErroAcesso('Sua sessão expirou. Entre novamente.');
    }

    $usuario = null;
    if ($sessao['id'] === 'principal') {
        $principal = usuarioPrincipal();
        if ($principal && hash_equals(versaoSenha(hashPrincipal()), $sessao['versao'])) {
            $usuario = $principal;
        }
    } else {
        foreach (lerUsuarios() as $salvo) {
            if ($salvo['id'] === $sessao['id'] && hash_equals(versaoSenha($salvo['senhaHash']), $sessao['versao'])) {
                $usuario = paraPublico($salvo);
                break;
            }
        }
    }

    if (!$usuario) {
        throw new ErroAcesso('Sua sessão expirou. Entre novamente.');
    }
    if ($papel === 'admin' && $usuario['papel'] !== 'admin') {
        throw new ErroAcesso('Apenas administradores podem fazer isso.', 403);
    }
    return $usuario;
}

// ---------------------------------------------------------------------------
// Fotos
// ---------------------------------------------------------------------------

function tipoDaImagem($dados)
{
    if (substr($dados, 0, 3) === "\xFF\xD8\xFF") {
        return 'jpg';
    }
    if (substr($dados, 0, 8) === "\x89PNG\r\n\x1A\n") {
        return 'png';
    }
    if (substr($dados, 0, 4) === 'RIFF' && substr($dados, 8, 4) === 'WEBP') {
        return 'webp';
    }
    return null;
}

/** Fotos enviadas mas não salvas ficam aqui até o "Salvar e publicar". */
function pastaPendentes()
{
    $pasta = pastaDados() . '/pendentes';
    criarPasta($pasta);
    return $pasta;
}

function limparPendentes()
{
    foreach (glob(pastaPendentes() . '/*') ?: [] as $arquivo) {
        if (is_file($arquivo) && filemtime($arquivo) < time() - 86400) {
            @unlink($arquivo);
        }
    }
}

// ---------------------------------------------------------------------------
// Ações
// ---------------------------------------------------------------------------

function resposta($dados, $status = 200, $cookie = null)
{
    return ['dados' => $dados, 'status' => $status, 'cookie' => $cookie];
}

function acaoGet($acao)
{
    switch ($acao) {
        case 'publico':
            // Conteúdo adicionado pelo painel, lido pelo site ao abrir (sem login)
            $conteudo = [];
            foreach (NOMES_COLECOES as $colecao) {
                $conteudo[$colecao] = lerLista($colecao);
            }
            return resposta($conteudo);

        case 'sessao':
            try {
                return resposta(['usuario' => exigirUsuario()]);
            } catch (ErroAcesso $erro) {
                if ($erro->status === 401) {
                    return resposta(['usuario' => null]);
                }
                throw $erro;
            }

        case 'conteudo':
            exigirUsuario();
            $colecao = v($_GET, 'colecao');
            if (!ehColecao($colecao)) {
                throw new ErroValidacao('Seção desconhecida.');
            }
            return resposta(['itens' => lerLista($colecao)]);

        case 'usuarios':
            exigirUsuario('admin');
            $usuarios = [];
            $principal = usuarioPrincipal();
            if ($principal) {
                $usuarios[] = $principal;
            }
            foreach (lerUsuarios() as $usuario) {
                $usuarios[] = paraPublico($usuario);
            }
            return resposta(['usuarios' => $usuarios]);
    }
    return resposta(['erro' => 'Ação desconhecida.'], 404);
}

function acaoPost($acao, $corpo)
{
    switch ($acao) {
        case 'entrar':
            list($usuario, $hash) = entrar(v($corpo, 'email'), v($corpo, 'senha'));
            return resposta(['usuario' => $usuario], 200, cookieSessao($usuario['id'], $hash));

        case 'sair':
            return resposta(['ok' => true], 200, cookieSaida());

        case 'enviarFoto':
            exigirUsuario();
            $colecao = v($corpo, 'colecao');
            if (!ehColecao($colecao)) {
                throw new ErroValidacao('Seção desconhecida.');
            }
            $base64 = v($corpo, 'base64');
            if (!is_string($base64)) {
                throw new ErroValidacao('Foto inválida.');
            }
            if (strlen($base64) > ceil(TAMANHO_MAXIMO_FOTO / 3) * 4 + 4) {
                throw new ErroValidacao('A foto é grande demais (máximo de 3 MB).');
            }
            $dados = base64_decode($base64, true);
            if ($dados === false) {
                throw new ErroValidacao('Foto inválida.');
            }
            if (strlen($dados) > TAMANHO_MAXIMO_FOTO) {
                throw new ErroValidacao('A foto é grande demais (máximo de 3 MB).');
            }
            $tipo = tipoDaImagem($dados);
            if (!$tipo) {
                throw new ErroValidacao('Formato de foto não aceito. Use JPG, PNG ou WebP.');
            }

            $nomeOriginal = is_string(v($corpo, 'nome')) ? preg_replace('/\.[^.]+$/', '', $corpo['nome']) : 'foto';
            $pasta = paraSlug(preg_replace('/([A-Z])/', '-$1', $colecao));
            $url = '/uploads/' . $pasta . '/' . date('Y') . '/' . paraSlug($nomeOriginal) . '-' . sufixo() . '.' . $tipo;

            limparPendentes();
            $ref = bin2hex(random_bytes(16));
            escreverArquivo(pastaPendentes() . '/' . $ref . '.foto', $dados);
            escreverArquivo(pastaPendentes() . '/' . $ref . '.url', $url);
            return resposta(['url' => $url, 'ref' => $ref]);

        case 'salvar':
            $usuario = exigirUsuario();
            $colecao = v($corpo, 'colecao');
            if (!ehColecao($colecao)) {
                throw new ErroValidacao('Seção desconhecida.');
            }
            $entrada = is_array(v($corpo, 'item')) ? $corpo['item'] : [];
            $validado = validarItem($colecao, $entrada);
            $fotosEnviadas = [];
            foreach (is_array(v($corpo, 'fotosEnviadas')) ? $corpo['fotosEnviadas'] : [] as $foto) {
                if (is_string(v($foto, 'url')) && is_string(v($foto, 'ref'))) {
                    $fotosEnviadas[$foto['url']] = $foto['ref'];
                }
            }
            $titulo = tituloDoItem($colecao, $validado);
            $agora = agoraIso();
            $idEntrada = v($entrada, 'id');

            $item = comTrava(function () use ($colecao, $validado, $fotosEnviadas, $titulo, $agora, $idEntrada, $usuario) {
                $lista = lerLista($colecao);
                $indice = -1;
                if (is_string($idEntrada)) {
                    foreach ($lista as $i => $existente) {
                        if (v($existente, 'id') === $idEntrada) {
                            $indice = $i;
                            break;
                        }
                    }
                }
                if (verdadeiro($idEntrada) && $indice === -1) {
                    throw new ErroValidacao('Este item não existe mais. Recarregue a página.');
                }
                $anterior = $indice >= 0 ? $lista[$indice] : null;

                $fotosAntes = $anterior ? fotosDoItem($colecao, $anterior) : [];
                $fotosDepois = fotosDoItem($colecao, $validado);

                // Confere todas as fotos novas antes de mexer em qualquer arquivo
                $mover = [];
                foreach (array_unique($fotosDepois) as $url) {
                    if (in_array($url, $fotosAntes, true)) {
                        continue;
                    }
                    $ref = isset($fotosEnviadas[$url]) ? $fotosEnviadas[$url] : '';
                    $origem = pastaPendentes() . '/' . $ref . '.foto';
                    $urlPendente = pastaPendentes() . '/' . $ref . '.url';
                    if (!preg_match('/^[a-f0-9]{32}$/D', $ref) || !is_file($origem) || !is_file($urlPendente) || file_get_contents($urlPendente) !== $url) {
                        throw new ErroValidacao('Uma das fotos não foi enviada corretamente. Envie-a de novo.');
                    }
                    $mover[] = [$origem, $urlPendente, caminhoDaFoto($url)];
                }

                if ($anterior) {
                    $meta = is_array(v($anterior, '_meta')) ? $anterior['_meta'] : [];
                    $meta['atualizadoEm'] = $agora;
                    $meta['atualizadoPor'] = $usuario['nome'];
                    $novo = array_merge(['id' => $anterior['id']], $validado, ['_meta' => $meta]);
                    $lista[$indice] = $novo;
                } else {
                    $novo = array_merge(['id' => paraSlug($titulo) . '-' . sufixo()], $validado, ['_meta' => ['criadoEm' => $agora, 'criadoPor' => $usuario['nome']]]);
                    $lista[] = $novo;
                }

                foreach ($mover as $passo) {
                    list($origem, $urlPendente, $destino) = $passo;
                    criarPasta(dirname($destino));
                    if (!@rename($origem, $destino)) {
                        throw new ErroConfiguracao('O servidor não permite gravar na pasta "uploads" do site. Peça à DTI permissão de escrita (veja HOSPEDAGEM-DTI.md).');
                    }
                    @chmod($destino, 0644);
                    @unlink($urlPendente);
                }
                gravarLista($colecao, $lista);
                foreach ($fotosAntes as $url) {
                    if (!in_array($url, $fotosDepois, true) && preg_match(PADRAO_URL_FOTO, $url)) {
                        @unlink(caminhoDaFoto($url));
                    }
                }
                return $novo;
            });
            registrar($usuario, (verdadeiro($idEntrada) ? 'atualizou' : 'adicionou') . ' ' . ROTULOS[$colecao] . ' "' . $titulo . '"');
            return resposta(['item' => $item]);

        case 'excluir':
            $usuario = exigirUsuario();
            $colecao = v($corpo, 'colecao');
            if (!ehColecao($colecao)) {
                throw new ErroValidacao('Seção desconhecida.');
            }
            $id = v($corpo, 'id');
            $removido = comTrava(function () use ($colecao, $id) {
                $lista = lerLista($colecao);
                $restantes = [];
                $removido = null;
                foreach ($lista as $item) {
                    if ($removido === null && v($item, 'id') === $id) {
                        $removido = $item;
                    } else {
                        $restantes[] = $item;
                    }
                }
                if ($removido === null) {
                    return null;
                }
                gravarLista($colecao, $restantes);
                foreach (fotosDoItem($colecao, $removido) as $url) {
                    if (preg_match(PADRAO_URL_FOTO, $url)) {
                        @unlink(caminhoDaFoto($url));
                    }
                }
                return $removido;
            });
            if ($removido !== null) {
                registrar($usuario, 'removeu ' . ROTULOS[$colecao] . ' "' . tituloDoItem($colecao, $removido) . '"');
            }
            return resposta(['ok' => true]);

        case 'salvarUsuario':
            $admin = exigirUsuario('admin');
            $nome = is_string(v($corpo, 'nome')) ? cortar(aparar($corpo['nome']), 120) : '';
            $email = is_string(v($corpo, 'email')) ? minusculas(aparar($corpo['email'])) : '';
            $papel = v($corpo, 'papel') === 'admin' ? 'admin' : 'editor';
            $id = v($corpo, 'id');
            if ($nome === '') {
                throw new ErroValidacao('Informe o nome.');
            }
            if (!preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/uD', $email)) {
                throw new ErroValidacao('Informe um e-mail válido.');
            }
            $principal = usuarioPrincipal();
            if ($principal && $email === $principal['email']) {
                throw new ErroValidacao('Este e-mail já é usado pela conta principal.');
            }
            $senhaHash = verdadeiro(v($corpo, 'senha')) ? gerarHashSenha(validarNovaSenha($corpo['senha'])) : null;

            $usuario = comTrava(function () use ($admin, $nome, $email, $papel, $id, $senhaHash) {
                $usuarios = lerUsuarios();
                foreach ($usuarios as $existente) {
                    if ($existente['email'] === $email && $existente['id'] !== $id) {
                        throw new ErroValidacao('Já existe uma pessoa com este e-mail.');
                    }
                }
                $indice = -1;
                if (verdadeiro($id)) {
                    foreach ($usuarios as $i => $existente) {
                        if ($existente['id'] === $id) {
                            $indice = $i;
                            break;
                        }
                    }
                    if ($indice === -1) {
                        throw new ErroValidacao('Esta pessoa não existe mais. Recarregue a página.');
                    }
                }

                if ($indice >= 0) {
                    if ($id === $admin['id'] && $papel !== 'admin') {
                        throw new ErroValidacao('Você não pode tirar seu próprio acesso de administrador.');
                    }
                    $usuarios[$indice]['nome'] = $nome;
                    $usuarios[$indice]['email'] = $email;
                    $usuarios[$indice]['papel'] = $papel;
                    if ($senhaHash) {
                        $usuarios[$indice]['senhaHash'] = $senhaHash;
                    }
                    $salvo = $usuarios[$indice];
                } else {
                    if (!$senhaHash) {
                        throw new ErroValidacao('Defina uma senha inicial.');
                    }
                    $salvo = ['id' => novoUuid(), 'nome' => $nome, 'email' => $email, 'papel' => $papel, 'senhaHash' => $senhaHash, 'criadoEm' => agoraIso()];
                    $usuarios[] = $salvo;
                }
                gravarUsuarios($usuarios);
                return paraPublico($salvo);
            });
            registrar($admin, 'atualizou o acesso de ' . $usuario['email']);
            return resposta(['usuario' => $usuario]);

        case 'excluirUsuario':
            $admin = exigirUsuario('admin');
            $id = v($corpo, 'id');
            if ($id === $admin['id']) {
                throw new ErroValidacao('Você não pode remover a si mesmo.');
            }
            $removido = comTrava(function () use ($id) {
                $usuarios = lerUsuarios();
                $restantes = [];
                $removido = null;
                foreach ($usuarios as $usuario) {
                    if ($usuario['id'] === $id) {
                        $removido = $usuario;
                    } else {
                        $restantes[] = $usuario;
                    }
                }
                if ($removido !== null) {
                    gravarUsuarios($restantes);
                }
                return $removido;
            });
            if ($removido !== null) {
                registrar($admin, 'removeu o acesso de ' . $removido['email']);
            }
            return resposta(['ok' => true]);

        case 'trocarSenha':
            $usuario = exigirUsuario();
            if (!empty($usuario['principal'])) {
                throw new ErroValidacao('A senha da conta principal é definida no arquivo api/config.php do servidor (ADMIN_PASSWORD).');
            }
            $novoHash = gerarHashSenha(validarNovaSenha(v($corpo, 'novaSenha')));
            $senhaAtual = v($corpo, 'senhaAtual');

            comTrava(function () use ($usuario, $novoHash, $senhaAtual) {
                $usuarios = lerUsuarios();
                $indice = -1;
                foreach ($usuarios as $i => $salvo) {
                    if ($salvo['id'] === $usuario['id']) {
                        $indice = $i;
                        break;
                    }
                }
                if ($indice === -1 || !is_string($senhaAtual) || !password_verify($senhaAtual, $usuarios[$indice]['senhaHash'])) {
                    throw new ErroValidacao('A senha atual está incorreta.');
                }
                $usuarios[$indice]['senhaHash'] = $novoHash;
                gravarUsuarios($usuarios);
            });
            return resposta(['ok' => true], 200, cookieSessao($usuario['id'], $novoHash));
    }
    return resposta(['erro' => 'Ação desconhecida.'], 404);
}

// ---------------------------------------------------------------------------
// Entrada
// ---------------------------------------------------------------------------

function enviar($resultado)
{
    http_response_code($resultado['status']);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    if ($resultado['cookie']) {
        header('Set-Cookie: ' . $resultado['cookie'], false);
    }
    echo json_encode($resultado['dados'], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}

try {
    $metodo = (string) v($_SERVER, 'REQUEST_METHOD');
    if ($metodo === 'GET') {
        $acao = v($_GET, 'acao');
        $resultado = acaoGet(is_string($acao) ? $acao : '');
    } elseif ($metodo === 'POST') {
        $tipo = (string) (v($_SERVER, 'CONTENT_TYPE') ?: v($_SERVER, 'HTTP_CONTENT_TYPE'));
        if (stripos($tipo, 'application/json') === false) {
            $resultado = resposta(['erro' => 'Requisição inválida.'], 415);
        } else {
            $corpo = json_decode((string) file_get_contents('php://input'), true);
            $resultado = is_array($corpo)
                ? acaoPost(is_string(v($corpo, 'acao')) ? $corpo['acao'] : '', $corpo)
                : resposta(['erro' => 'Requisição inválida.'], 400);
        }
    } else {
        $resultado = resposta(['erro' => 'Método não permitido.'], 405);
    }
} catch (ErroAcesso $erro) {
    $resultado = resposta(['erro' => $erro->getMessage()], $erro->status);
} catch (ErroValidacao $erro) {
    $resultado = resposta(['erro' => $erro->getMessage()], 400);
} catch (ErroConfiguracao $erro) {
    error_log('[painel memorial] ' . $erro->getMessage());
    $resultado = resposta(['erro' => $erro->getMessage()], 500);
} catch (ErroArmazenamento $erro) {
    error_log('[painel memorial] ' . $erro->getMessage());
    $resultado = resposta(['erro' => 'Não foi possível salvar agora. Tente de novo em alguns instantes.'], 500);
} catch (Throwable $erro) {
    error_log('[painel memorial] ' . $erro->getMessage() . ' em ' . $erro->getFile() . ':' . $erro->getLine());
    $resultado = resposta(['erro' => 'Ocorreu um erro inesperado. Tente de novo.'], 500);
}

enviar($resultado);
