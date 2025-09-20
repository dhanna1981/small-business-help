<?php
// contact.php - Simple contact form handler for Ionos hosting
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
$required_fields = ['firstName', 'lastName', 'email', 'phone', 'consent'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "Field $field is required"]);
        exit;
    }
}

// Sanitize input
$firstName = filter_var($input['firstName'], FILTER_SANITIZE_STRING);
$lastName = filter_var($input['lastName'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
$message = isset($input['message']) ? filter_var($input['message'], FILTER_SANITIZE_STRING) : '';
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
$to_email = "info@sbhelpgroup.com";
$from_email = "noreply@sbhelpgroup.com";
$subject = "New Contact Form Submission - Small Business Help Group";

// Create email content
$email_content = "
New contact form submission received:

Name: $firstName $lastName
Email: $email
Phone: $phone
Message: $message

IP Address: $ipAddress
Timestamp: $timestamp

---
This message was sent from the Small Business Help Group contact form.
";

// Email headers
$headers = array(
    'From' => $from_email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/plain; charset=UTF-8'
);

$header_string = '';
foreach ($headers as $key => $value) {
    $header_string .= "$key: $value\r\n";
}

// Send email
if (mail($to_email, $subject, $email_content, $header_string)) {
    // Log the submission (optional)
    $log_entry = date('Y-m-d H:i:s') . " - Contact form submission from $email ($firstName $lastName)\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // TODO: Google Sheets Integration
    // Uncomment and configure the following section to enable Google Sheets logging
    /*
    try {
        // Google Sheets API integration would go here
        // Example configuration:
        // 1. Set up Google Sheets API credentials
        // 2. Create service account key
        // 3. Share spreadsheet with service account email
        // 4. Use Google Client Library to append data
        
        // Sample code structure:
        // require_once 'vendor/autoload.php';
        // $client = new Google_Client();
        // $client->setAuthConfig('path/to/service-account-key.json');
        // $client->addScope(Google_Service_Sheets::SPREADSHEETS);
        // $service = new Google_Service_Sheets($client);
        // 
        // $spreadsheetId = 'your-spreadsheet-id';
        // $range = 'Sheet1!A:F';
        // $values = [[$firstName, $lastName, $email, $phone, $message, $timestamp]];
        // $body = new Google_Service_Sheets_ValueRange(['values' => $values]);
        // $service->spreadsheets_values->append($spreadsheetId, $range, $body, ['valueInputOption' => 'RAW']);
        
    } catch (Exception $e) {
        error_log('Google Sheets integration error: ' . $e->getMessage());
        // Continue execution even if Google Sheets fails
    }
    */
    
    // Return success response
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message']);
}
?>