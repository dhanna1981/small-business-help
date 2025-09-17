# Ionos Hosting Deployment Guide

This guide will help you deploy your Small Business Help Group website to Ionos hosting.

## Prerequisites

- Node.js (v18 or higher) installed on your local machine
- Access to your Ionos hosting account
- FTP/SFTP access to your Ionos server

## Step 1: Build the Application

1. **Download or clone this project** to your local computer
2. **Open terminal/command prompt** in the project folder
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Build the application:**
   ```bash
   npm run build
   ```

This will create a `dist` folder containing all the static files ready for deployment.

## Step 2: Prepare for Ionos

### A. Check your Ionos hosting package
- Ensure you have a hosting package that supports static websites
- You'll need access to the web root directory (usually `public_html` or similar)

### B. Get your FTP credentials
From your Ionos control panel, you'll need:
- FTP server address (usually your domain or server IP)
- FTP username
- FTP password
- Port (usually 21 for FTP or 22 for SFTP)

## Step 3: Upload Files to Ionos

### Option A: Using FileZilla (Recommended)

1. **Download FileZilla** (free FTP client) from https://filezilla-project.org/
2. **Connect to your server:**
   - Host: Your FTP server address
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)
3. **Navigate to your web root** (usually `public_html`, `www`, or `/`)
4. **Upload all files from the `dist` folder** to your web root directory
   - Select all files inside the `dist` folder (not the folder itself)
   - Drag and drop them to the server side in FileZilla

### Option B: Using Ionos File Manager

1. **Log into your Ionos control panel**
2. **Find the File Manager** option
3. **Navigate to your web root directory**
4. **Upload the contents of the `dist` folder**
   - You may need to zip the files first, upload the zip, then extract

## Step 4: Configure Domain and DNS

1. **Point your domain to Ionos** (if not already done)
2. **Ensure your domain** `sbhelpgroup.com` is configured in your Ionos account
3. **Wait for DNS propagation** (can take up to 24 hours)

## Step 5: Set up SSL Certificate

1. **In your Ionos control panel**, look for SSL/TLS options
2. **Enable SSL** for your domain (Ionos usually provides free Let's Encrypt certificates)
3. **Force HTTPS** by enabling redirects from HTTP to HTTPS

## Step 6: Configure Contact Form (Important!)

Your website has contact forms that need server-side processing. You have several options:

### Option A: Use a Form Service (Easiest)
Replace the form handling with a service like:
- **Formspree** (https://formspree.io/)
- **Netlify Forms** 
- **EmailJS** (https://www.emailjs.com/)

### Option B: PHP Implementation (If Ionos supports PHP)
If your Ionos package supports PHP, you can create a `contact.php` file to handle form submissions.

### Option C: Third-party Integration
Integrate with services like:
- **Mailchimp**
- **ConvertKit**
- **ActiveCampaign**

## Step 7: Test Your Website

1. **Visit your domain** `https://sbhelpgroup.com`
2. **Test all functionality:**
   - Navigation links
   - Calculator sliders
   - Contact form
   - Mobile responsiveness
   - Page loading speed

## Step 8: Post-Deployment Checklist

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Contact forms work (or are properly configured)
- [ ] Mobile version works
- [ ] SSL certificate is active
- [ ] All pages are accessible
- [ ] SEO meta tags are working
- [ ] Calculators function properly

## Troubleshooting Common Issues

### 1. **Images not loading**
- Ensure all images in the `assets` folder were uploaded
- Check file paths are correct

### 2. **CSS/JavaScript not loading**
- Verify all files from `dist` folder were uploaded
- Check that index.html references are correct

### 3. **Contact form not working**
- Forms need server-side processing
- Implement one of the contact form solutions above

### 4. **404 errors on page refresh**
- This is a single-page application (SPA)
- You may need to configure URL rewriting
- Contact Ionos support for SPA configuration help

## Important Notes

1. **This is a React single-page application** - all routing happens client-side
2. **Contact forms require server setup** - they won't work without backend processing
3. **Mobile popup functionality** is included and will work automatically
4. **Exit intent popup** is configured for desktop users

## Need Help?

If you encounter issues:
1. **Check Ionos documentation** for your specific hosting package
2. **Contact Ionos support** - they can help with server configuration
3. **Consider hiring a developer** if you need custom PHP form handling

## File Structure After Upload

Your Ionos web root should contain:
```
public_html/
├── index.html
├── assets/
│   ├── css files
│   ├── js files
│   └── images/
└── other static files
```

## Performance Optimization

After deployment, consider:
- **Enable Gzip compression** (check Ionos control panel)
- **Set up caching** headers
- **Optimize images** for web delivery
- **Monitor site speed** with Google PageSpeed Insights

---

**Your website is now ready to help businesses reduce costs and drive growth!**