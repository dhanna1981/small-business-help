# Quick Deployment Checklist for Ionos

## Before You Start
- [ ] Node.js installed on your computer
- [ ] Ionos hosting account credentials
- [ ] FTP/SFTP access details
- [ ] Domain pointed to Ionos servers

## Steps to Deploy

### 1. Build the Project
```bash
# In your project folder
npm install
npm run build
```

### 2. Files to Upload
Upload ALL files from the `dist` folder to your Ionos web root:
- [ ] `index.html` 
- [ ] `assets/` folder (contains CSS, JS, images)
- [ ] Any other files from the dist folder

### 3. Additional Files (From Project Root)
Also upload these files from the project root to enable contact forms:
- [ ] `contact.php` (for contact form)
- [ ] `ebook.php` (for ebook downloads)  
- [ ] `.htaccess` (for URL routing and security)

### 4. Configuration
- [ ] Update email addresses in `contact.php` and `ebook.php`
- [ ] Test contact forms work
- [ ] Verify SSL certificate is active
- [ ] Check all pages load correctly

### 5. Final Tests
- [ ] Website loads at your domain
- [ ] All images display
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Mobile version works
- [ ] Calculators function properly
- [ ] Exit popup appears (desktop)
- [ ] Mobile timer popup works (15 seconds)

## If Contact Forms Don't Work

Your Ionos package might not support PHP. Alternatives:
1. **Use Formspree**: https://formspree.io/ (easiest)
2. **Use EmailJS**: https://www.emailjs.com/
3. **Contact Ionos support** to enable PHP

## Need Help?
- Check DEPLOYMENT_GUIDE.md for detailed instructions
- Contact Ionos support for server issues
- Verify your hosting package includes PHP support

---
**Your professional business website is ready to help companies reduce costs and grow!**