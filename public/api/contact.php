<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Método no permitido.');
}

$payload = json_decode(file_get_contents('php://input'), true);
if (!is_array($payload)) {
    respond(400, 'Solicitud inválida.');
}

// Honeypot for basic bot protection.
if (!empty($payload['website'])) {
    respond(200, 'Mensaje recibido.');
}

$name = clean_value($payload['name'] ?? '');
$email = clean_value($payload['email'] ?? '');
$phone = clean_value($payload['phone'] ?? '');
$topic = clean_value($payload['topic'] ?? '');
$message = clean_value($payload['message'] ?? '');

$recipients = [
    'Consulta general' => 'info@terraignis.ar',
    'Empleo' => 'empleo@terraignis.ar',
    'Prensa' => 'm.yaleva@terraignis.ar',
];

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, 'Completá nombre, email y mensaje para continuar.');
}

if (!isset($recipients[$topic])) {
    respond(422, 'Seleccioná un motivo de consulta válido.');
}

$smtpHost = getenv('TERRA_SMTP_HOST') ?: 'mail.terraignisenergia.com';
$smtpPort = (int) (getenv('TERRA_SMTP_PORT') ?: '465');
$smtpUser = getenv('TERRA_SMTP_USER') ?: 'noreply@terraignisenergia.com';
$smtpPassword = getenv('TERRA_SMTP_PASSWORD') ?: '';

if ($smtpPassword === '') {
    error_log('Contact form SMTP error: TERRA_SMTP_PASSWORD is not configured.');
    respond(500, 'No pudimos enviar tu mensaje en este momento. Intentá nuevamente más tarde.');
}
$fromAddress = $smtpUser;
$recipient = $recipients[$topic];
$subject = "[Contacto web] {$topic} — Terra Ignis Energía";
$body = implode("\n", [
    "Nombre: {$name}",
    "Email: {$email}",
    "Teléfono: " . ($phone !== '' ? $phone : 'No informado'),
    "Motivo: {$topic}",
    '',
    'Mensaje:',
    $message,
]);

try {
    smtp_send($smtpHost, $smtpPort, $smtpUser, $smtpPassword, $fromAddress, $recipient, $subject, $body, $email);
    respond(200, 'Mensaje enviado correctamente.');
} catch (Throwable $error) {
    error_log('Contact form SMTP error: ' . $error->getMessage());
    respond(500, 'No pudimos enviar tu mensaje en este momento. Intentá nuevamente más tarde.');
}

function clean_value($value): string
{
    if (!is_string($value)) {
        return '';
    }

    // Prevent header injection and normalize line endings in user input.
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function smtp_send(
    string $host,
    int $port,
    string $username,
    string $password,
    string $from,
    string $to,
    string $subject,
    string $body,
    string $replyTo
): void {
    $socket = @stream_socket_client("ssl://{$host}:{$port}", $errorCode, $errorMessage, 20, STREAM_CLIENT_CONNECT);
    if (!$socket) {
        throw new RuntimeException("SMTP connection failed ({$errorCode}): {$errorMessage}");
    }

    stream_set_timeout($socket, 20);
    try {
        smtp_expect($socket, [220]);
        smtp_command($socket, 'EHLO terraignis-web', [250]);
        smtp_command($socket, 'AUTH LOGIN', [334]);
        smtp_command($socket, base64_encode($username), [334]);
        smtp_command($socket, base64_encode($password), [235]);
        smtp_command($socket, "MAIL FROM:<{$from}>", [250]);
        smtp_command($socket, "RCPT TO:<{$to}>", [250, 251]);
        smtp_command($socket, 'DATA', [354]);

        $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
        $headers = [
            "Date: " . date(DATE_RFC2822),
            "From: Terra Ignis Web <{$from}>",
            "To: <{$to}>",
            "Reply-To: <{$replyTo}>",
            "Subject: {$encodedSubject}",
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            '',
        ];
        $message = implode("\r\n", $headers) . str_replace(["\r\n", "\r", "\n"], "\r\n", $body);
        $message = preg_replace('/(^|\r\n)\./', '$1..', $message) ?? $message;

        if (fwrite($socket, $message . "\r\n.\r\n") === false) {
            throw new RuntimeException('SMTP message write failed.');
        }
        smtp_expect($socket, [250]);
        smtp_command($socket, 'QUIT', [221]);
    } finally {
        fclose($socket);
    }
}

function smtp_command($socket, string $command, array $expectedCodes): string
{
    if (fwrite($socket, $command . "\r\n") === false) {
        throw new RuntimeException('SMTP command write failed.');
    }

    return smtp_expect($socket, $expectedCodes);
}

function smtp_expect($socket, array $expectedCodes): string
{
    $response = '';
    do {
        $line = fgets($socket);
        if ($line === false) {
            throw new RuntimeException('SMTP server closed the connection.');
        }
        $response .= $line;
        $code = (int) substr($line, 0, 3);
        $isFinalLine = isset($line[3]) && $line[3] === ' ';
    } while (!$isFinalLine);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException("SMTP error {$code}: " . trim($response));
    }

    return $response;
}
