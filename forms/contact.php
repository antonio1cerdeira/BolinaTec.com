<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $statusCode, string $message): never
{
    http_response_code($statusCode);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function clean_header_value(string $value): string
{
    return trim(str_replace(["\r", "\n"], '', $value));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Método não permitido.');
}

$honeypot = trim((string) ($_POST['website'] ?? ''));
if ($honeypot !== '') {
    respond(400, 'Pedido inválido.');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$company = trim((string) ($_POST['company'] ?? ''));
$interest = trim((string) ($_POST['interest'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? 'Novo contacto via site'));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    respond(422, 'Nome, email e mensagem são obrigatórios.');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'O email indicado não é válido.');
}

$safeName = clean_header_value($name);
$safeEmail = clean_header_value($email);
$safeSubject = clean_header_value($subject);

$receivingEmailAddress = 'no-reply@bolinatec.com';
$mailSubject = 'Bolina Tec | ' . ($safeSubject !== '' ? $safeSubject : 'Novo contacto via site');

$bodyLines = [
    'Novo contacto recebido pelo site da Bolina Tec.',
    '',
    'Nome: ' . $name,
    'Email: ' . $email,
    'Empresa/Organização: ' . ($company !== '' ? $company : 'Não indicada'),
    'Tema principal: ' . ($interest !== '' ? $interest : 'Não indicado'),
    '',
    'Mensagem:',
    $message,
    '',
    'Data UTC: ' . gmdate('c'),
];

$body = implode(PHP_EOL, $bodyLines);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Bolina Tec Website <' . $receivingEmailAddress . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$mailSent = false;

if (function_exists('mail')) {
    $mailSent = @mail($receivingEmailAddress, $mailSubject, $body, implode("\r\n", $headers));
}

if (!$mailSent) {
    $logEntry = implode(PHP_EOL, [
        str_repeat('-', 72),
        $body,
        '',
    ]);

    $logResult = @file_put_contents(__DIR__ . '/contact-submissions.log', $logEntry, FILE_APPEND | LOCK_EX);

    if ($logResult === false) {
        respond(500, 'Não foi possível processar a submissão neste momento.');
    }
}

respond(200, 'Mensagem enviada com sucesso. A equipa da Bolina Tec entrará em contacto em breve.');
