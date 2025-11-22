# Email Setup - FormSubmit

The contact forms are now configured to send emails directly to `support@bravonest.lk` using FormSubmit, a free email service.

## How It Works

- **No setup required** - The forms work immediately
- **Direct email delivery** - Emails are sent directly to `support@bravonest.lk`
- **Free service** - FormSubmit provides free email delivery

## First-Time Setup (One-Time Verification)

When you submit the first form, FormSubmit will send a verification email to `support@bravonest.lk`. 

**Important:** You need to:
1. Check the inbox for `support@bravonest.lk`
2. Look for an email from FormSubmit
3. Click the verification link in that email
4. After verification, all future form submissions will work automatically

## What Happens When Forms Are Submitted

1. User fills out and submits a form (Project Call Request or Course Enquiry)
2. The form data is sent to FormSubmit
3. FormSubmit sends an email to `support@bravonest.lk` with:
   - Subject line (e.g., "Project Call Request - Software Only")
   - All form details (name, email, message, etc.)
   - Reply-to address set to the user's email (so you can reply directly)

## Email Format

Each email will include:
- **Subject**: Clear subject line indicating the type of enquiry
- **Body**: Formatted message with all submitted details
- **Reply-To**: Set to the user's email address for easy replies

## Troubleshooting

- **Not receiving emails?** Check if you've verified the email address (see First-Time Setup above)
- **Emails going to spam?** Check your spam/junk folder and mark FormSubmit emails as "Not Spam"
- **Still not working?** Check the browser console for any error messages

## Alternative: Custom Email Service

If you prefer to use a different email service (like EmailJS, SendGrid, etc.), you can modify the `src/lib/email-service.ts` file to use your preferred service.

