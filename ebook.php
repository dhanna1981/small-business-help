<?php
// ebook.php - E-book download handler for Ionos hosting
// Place this file in your web root directory alongside your website files

// Set headers for CORS if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($input['email']) || empty($input['consent'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and consent are required']);
    exit;
}

// Sanitize input
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$ipAddress = isset($input['ipAddress']) ? filter_var($input['ipAddress'], FILTER_SANITIZE_STRING) : $_SERVER['REMOTE_ADDR'];
$timestamp = isset($input['timestamp']) ? $input['timestamp'] : date('Y-m-d H:i:s');

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Honeypot check (anti-spam)
if (!empty($input['honeypot'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Spam detected']);
    exit;
}

// Email configuration - UPDATE THESE WITH YOUR DETAILS
$to_email = $email;
$from_email = "info@sbhelpgroup.com";
$admin_email = "info@sbhelpgroup.com";
$subject = "Your Free Cost Reduction Guide - Small Business Help Group";

// Create email content for the user
$user_email_content = "
Thank you for downloading our Cost Reduction Guide!

Dear Valued Business Owner,

Thank you for your interest in reducing your business costs and driving growth. 

Your free 'Cost Reduction Guide' contains 25 proven strategies that have helped over 150 businesses save millions of dollars.

Download your guide here: [You would put your actual download link here]

What's Inside:
✓ 25 Cost-Cutting Strategies
✓ Expert Insights from our team
✓ Implementation Checklist
✓ Real case studies and examples

Questions? Reply to this email or call us at (724) 418-2284.

Best regards,
The Small Business Help Group Team

---
Small Business Help Group
170 West State St, Sharon, PA 16146
Phone: (724) 418-2284
Email: info@sbhelpgroup.com
Website: https://sbhelpgroup.com
";

// Create notification email for admin
$admin_email_content = "
New E-book Download Request:

Email: $email
IP Address: $ipAddress
Timestamp: $timestamp

---
This notification was sent from the Small Business Help Group e-book form.
";

// Email headers
$user_headers = array(
    'From' => $from_email,
    'Reply-To' => $from_email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

$admin_headers = array(
    'From' => $from_email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

$user_header_string = '';
foreach ($user_headers as $key => $value) {
    $user_header_string .= "$key: $value\r\n";
}

$admin_header_string = '';
foreach ($admin_headers as $key => $value) {
    $admin_header_string .= "$key: $value\r\n";
}

// Send emails
$user_email_sent = mail($to_email, $subject, $user_email_content, $user_header_string);
$admin_email_sent = mail($admin_email, "New E-book Download Request", $admin_email_content, $admin_header_string);

if ($user_email_sent) {
    // Log the submission (optional)
    $log_entry = date('Y-m-d H:i:s') . " - E-book download request from $email\n";
    file_put_contents('ebook_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // Return success response
    echo json_encode(['success' => true, 'message' => 'Download link sent to your email']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send download link']);
}
?>