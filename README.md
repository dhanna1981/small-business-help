# Small Business Help Group

## 🚀 Overview

This project is a modern React.js web application with a PHP backend for contact forms.  
- Video hero, dynamic sliders, testimonials, FAQ, PCMP info, and more.
- All form submissions are handled by **your own PHP backend** (no third-party processor).
- Optionally, submissions can be logged directly to your Google Sheet using the Google Sheets API.

---

## 📦 Project Structure (for IONOS Classic FTP Hosting)

```
/build            # React production build output (static files)
  └── index.html, static/, etc.
api/
  └── contact.php # Your PHP backend endpoint
  └── google-credentials.json (optional, for Google Sheets - see below)
public/
  └── favicon.ico, robots.txt, etc.
README.md
```

---

## 🚛 Deployment Instructions (IONOS Web Hosting, Classic FTP)

1. **Build the React App Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload Files to IONOS via FTP**
   - Connect to your IONOS FTP using FileZilla or the IONOS file manager.
   - Upload all files from the `build/` directory to your web root (often `/htdocs/` or `/`).
   - Upload the `api/contact.php` file to your web root or `/api/` subdirectory (update your frontend if you use a subfolder).

3. **Set File Permissions**
   - Make sure `contact.php` is readable/executable by the web server.
   - If using Google Sheets, keep your `google-credentials.json` private (not web-accessible).

4. **Test the Site**
   - Visit your domain. Forms should submit and send you email via PHPMailer.
   - If Google Sheets is enabled (see below), test that logs appear in your Sheet.

---

## ✉️ How the Contact/Ebook Forms Work

- The React frontend sends POST requests to your own PHP backend (`contact.php`).
- The PHP backend uses PHPMailer to send you an email with the form data.
- Optionally, the backend can log the submission to a Google Sheet (see below).

---

## 📄 Google Sheets Integration Setup (Optional)

You can log form submissions directly to your own Google Sheet for easy tracking.  
**No third-party service is used – only your PHP backend and your Google credentials.**

### 1. Create a Google Cloud Project

- Visit https://console.cloud.google.com/ and create a new project.

### 2. Enable the Google Sheets API

- In the Cloud Console, go to "APIs & Services" > "Library".
- Search for "Google Sheets API" and enable it.

### 3. Create a Service Account

- In "APIs & Services" > "Credentials", click "Create Credentials" > "Service account".
- Name it (e.g., "Sheets Logger"), then click "Create and Continue" (no need to assign roles).
- Finish and click into your new service account.

### 4. Create & Download a JSON Key

- In the Service Account details, go to "Keys" > "Add Key" > "Create new key".
- Choose **JSON** format and download the credentials file.
- Rename it (e.g., `google-credentials.json`).

### 5. Share Your Google Sheet with the Service Account

- Create a new Google Sheet for your logs.
- In the credentials JSON, find the `"client_email"` field (looks like: `...@...iam.gserviceaccount.com`).
- Share your Sheet with this email (like you would with a collaborator).

### 6. Upload the Credentials to Your Server

- Upload `google-credentials.json` to your server, ideally **outside your web root** if possible.
- Make sure your `contact.php` refers to the correct path for the credentials file.

### 7. Enable Google Sheets Logging in PHP

- In `contact.php`, you'll see a commented-out section for Google Sheets logging.
- Remove the comments to enable it, and set your Sheet ID and credentials path.
- Example:
  ```php
  // require_once __DIR__ . '/vendor/autoload.php';
  // $client = new \Google_Client();
  // $client->setApplicationName('Small Business Help Group');
  // $client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
  // $client->setAuthConfig(__DIR__ . '/google-credentials.json');
  // $service = new \Google_Service_Sheets($client);
  // $spreadsheetId = 'YOUR_SHEET_ID_HERE';
  // $range = 'Sheet1!A1:Z1'; // Adjust for your Sheet
  // $values = [[$name, $email, $message, date('c')]];
  // $body = new \Google_Service_Sheets_ValueRange(['values' => $values]);
  // $params = ['valueInputOption' => 'RAW'];
  // $service->spreadsheets_values->append($spreadsheetId, $range, $body, $params);
  ```
  - Replace `'YOUR_SHEET_ID_HERE'` with your Sheet's ID (from its URL).

### 8. Security Note

- Never expose your credentials JSON to the public web.
- Do not commit it to a public repo.

---

## 🛡️ Anti-Spam & Privacy

- Honeypot field and Google reCAPTCHA are included in form.
- Consent checkbox is required for form submission.
- No form data is sent to any third-party except Google Sheets (if you enable it and only to your own Sheet).

---

## 📝 Troubleshooting

- If form email fails: check your PHP mail configuration and PHPMailer SMTP settings.
- If Sheets logging fails: check that your credentials file is present, the Sheet is shared, and the path/ID are correct.
- Use browser dev tools and server logs for debugging.

---

## 📧 Need Help?

- For IONOS FTP issues: [IONOS Help Center](https://www.ionos.com/help/)
- For Google Sheets API: [Google Sheets API PHP Quickstart](https://developers.google.com/sheets/api/quickstart/php)
- For React: [React Docs](https://react.dev/)
- For PHPMailer: [PHPMailer Docs](https://github.com/PHPMailer/PHPMailer)

---

**You control all your form submissions. No third-party form processor is used.**
