<?php
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Sanitize helper
function clean($input) {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

// Collect inputs
$first_name = clean($_POST['first_name'] ?? '');
$last_name  = clean($_POST['last_name']  ?? '');
$email      = clean($_POST['email']      ?? '');
$phone      = clean($_POST['phone']      ?? '');
$product    = clean($_POST['product']    ?? '');
$message    = clean($_POST['message']    ?? '');

// ── Validation ──────────────────────────────────────────────────
$errors = [];

if (empty($first_name)) $errors[] = 'First name is required.';
if (empty($last_name))  $errors[] = 'Last name is required.';
if (empty($email))      $errors[] = 'Email address is required.';
if (empty($phone))      $errors[] = 'Phone number is required.';
if (empty($message))    $errors[] = 'Message is required.';

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}

if (!empty($phone) && !preg_match('/^[0-9+\-\s()]{7,20}$/', $phone)) {
    $errors[] = 'Please enter a valid phone number.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── Build email ──────────────────────────────────────────────────
$to      = 'provertsystems@gmail.com';
$subject = 'New Enquiry' . ($product && $product !== 'General Enquiry' ? ' — ' . $product : '') . ' from ' . $first_name . ' ' . $last_name;

$product_row = '';
if (!empty($product)) {
    $product_row = '
        <tr>
          <td class="label">Product of Interest</td>
          <td class="value highlight">' . $product . '</td>
        </tr>';
}

$body = '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  body        { margin:0; padding:0; background:#f0f4f8; font-family:Arial,sans-serif; }
  .wrap       { max-width:600px; margin:30px auto; border-radius:10px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,.1); }
  .head       { background:#116e4a; padding:28px 32px; }
  .head h1    { margin:0; color:#fff; font-size:20px; font-weight:700; letter-spacing:.3px; }
  .head p     { margin:6px 0 0; color:rgba(255,255,255,.75); font-size:13px; }
  .body       { background:#fff; padding:28px 32px; }
  table       { width:100%; border-collapse:collapse; }
  .label      { width:38%; padding:12px 0; font-size:12px; font-weight:700; color:#888; text-transform:uppercase; letter-spacing:.6px; vertical-align:top; }
  .value      { padding:12px 0; font-size:14px; color:#1a1a1a; border-bottom:1px solid #f0f0f0; }
  .highlight  { color:#116e4a; font-weight:700; }
  .msg        { white-space:pre-wrap; line-height:1.7; }
  tr:last-child .value { border-bottom:none; }
  .foot       { background:#f8f9fa; padding:16px 32px; text-align:center; font-size:12px; color:#aaa; border-top:1px solid #eee; }
</style>
</head>
<body>
<div class="wrap">
  <div class="head">
    <h1>New Enquiry — Provert Systems</h1>
    <p>Received via the website contact form</p>
  </div>
  <div class="body">
    <table>
      <tr>
        <td class="label">Full Name</td>
        <td class="value">' . $first_name . ' ' . $last_name . '</td>
      </tr>
      <tr>
        <td class="label">Email</td>
        <td class="value"><a href="mailto:' . $email . '" style="color:#116e4a;">' . $email . '</a></td>
      </tr>
      <tr>
        <td class="label">Phone</td>
        <td class="value"><a href="tel:' . $phone . '" style="color:#116e4a;">' . $phone . '</a></td>
      </tr>
      ' . $product_row . '
      <tr>
        <td class="label">Message</td>
        <td class="value msg">' . nl2br($message) . '</td>
      </tr>
    </table>
  </div>
  <div class="foot">
    This enquiry was submitted from <strong>provertsystems.com</strong>
  </div>
</div>
</body>
</html>';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
$headers .= 'From: Provert Systems Website <noreply@provertsystems.com>' . "\r\n";
$headers .= 'Reply-To: ' . $first_name . ' ' . $last_name . ' <' . $email . '>' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

// Also send confirmation to the visitor
$confirm_subject = 'We received your enquiry — Provert Systems';
$confirm_body = '<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8">
<style>
  body { margin:0;padding:0;background:#f0f4f8;font-family:Arial,sans-serif; }
  .wrap { max-width:560px;margin:30px auto;border-radius:10px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.1); }
  .head { background:#116e4a;padding:28px 32px; }
  .head h1 { margin:0;color:#fff;font-size:20px;font-weight:700; }
  .body { background:#fff;padding:32px; }
  .body p { color:#444;font-size:14px;line-height:1.8;margin:0 0 16px; }
  .highlight { color:#116e4a;font-weight:700; }
  .contact-box { background:#f8faf9;border:1px solid #d1ead9;border-radius:8px;padding:16px 20px;margin-top:20px; }
  .contact-box p { margin:4px 0;font-size:13px;color:#555; }
  .foot { background:#f8f9fa;padding:14px 32px;text-align:center;font-size:11px;color:#aaa;border-top:1px solid #eee; }
</style>
</head>
<body>
<div class="wrap">
  <div class="head"><h1>Thank you, ' . $first_name . '!</h1></div>
  <div class="body">
    <p>We have received your enquiry and our team will get back to you within <span class="highlight">1–2 business days</span>.</p>
    ' . ($product && $product !== 'General Enquiry' ? '<p>Your enquiry is regarding: <span class="highlight">' . $product . '</span></p>' : '') . '
    <p>If you need immediate assistance, feel free to reach us directly:</p>
    <div class="contact-box">
      <p>📞 <strong>+91 88103 31899</strong></p>
      <p>✉️ <strong>provertsystems@gmail.com</strong></p>
      <p>📍 Kh.no. 48/68, Village Khayala, New Delhi-110018</p>
    </div>
  </div>
  <div class="foot">© Provert Systems & Solutions Pvt. Ltd. — provertsystems.com</div>
</div>
</body>
</html>';

$confirm_headers  = 'MIME-Version: 1.0' . "\r\n";
$confirm_headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
$confirm_headers .= 'From: Provert Systems <provertsystems@gmail.com>' . "\r\n";

// Send both emails
$sent = mail($to, $subject, $body, $headers);
mail($email, $confirm_subject, $confirm_body, $confirm_headers); // confirmation to visitor (non-critical)

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you, ' . $first_name . '! Your message has been sent. We will get back to you within 1–2 business days.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send your message. Please email us directly at provertsystems@gmail.com or call +91 88103 31899.'
    ]);
}
