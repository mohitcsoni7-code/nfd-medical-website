# Email Setup for NFD Medical Website

## Overview
The contact forms on your website are now configured to send emails to mohitcsoni7@gmail.com using the Resend email service.

## Setup Steps

### 1. Get Resend API Key
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Add API Key to Vercel
1. Go to your Vercel dashboard
2. Select your NFD project
3. Go to Settings → Environment Variables
4. Add new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
   - **Environment:** Production (and Preview if you want to test)

### 3. Verify Domain (Optional but Recommended)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., nfd-medical.com)
3. Follow DNS verification steps
4. This allows emails to come from your domain instead of resend.dev

## How It Works

### Contact Forms
- **Home Page Contact Section** - Quick contact form
- **Contact Page** - Detailed contact form with additional fields
- **All forms** send emails to mohitcsoni7@gmail.com

### Email Content
Each email includes:
- Contact information (name, email, phone, company, job title)
- Inquiry details (type, urgency, subject)
- Full message content
- Professional HTML formatting
- Reply-to set to the sender's email

### Features
- ✅ Sends to mohitcsoni7@gmail.com
- ✅ Professional email formatting
- ✅ Reply-to functionality
- ✅ Error handling
- ✅ Form validation
- ✅ Logging for debugging

## Testing
1. Fill out any contact form on your website
2. Submit the form
3. Check mohitcsoni7@gmail.com for the email
4. Check Vercel logs for any errors

## Troubleshooting
- **Emails not sending:** Check RESEND_API_KEY in Vercel environment variables
- **API errors:** Check Vercel function logs
- **Domain issues:** Verify domain in Resend dashboard

## Cost
- Resend free tier: 3,000 emails/month
- Perfect for most business websites
- Upgrade plans available if needed
