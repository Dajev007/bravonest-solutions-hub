# EmailJS Setup Guide

This guide will help you configure EmailJS to send form submissions directly to `support@bravonest.lk`.

## Quick Setup

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

2. **Create an Email Service**
   - Go to Email Services in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Note your **Service ID**

3. **Create Email Templates**

   **Template 1: Project Enquiry**
   - Go to Email Templates
   - Click "Create New Template"
   - Set recipient to: `support@bravonest.lk`
   - Subject: `Project Call Request - {{project_type}}`
   - Content:
     ```
     New Project Call Request
     
     Name: {{from_name}}
     Email: {{from_email}}
     Project Type: {{project_type}}
     Preferred Time Window: {{time_window}}
     
     Description:
     {{description}}
     ```
   - Note your **Template ID**

   **Template 2: Course Enquiry**
   - Create another template
   - Set recipient to: `support@bravonest.lk`
   - Subject: `Course Enquiry - {{course}}`
   - Content:
     ```
     New Course Enquiry
     
     Name: {{from_name}}
     Email: {{from_email}}
     Course of Interest: {{course}}
     
     Message:
     {{message}}
     ```
   - Note your **Template ID**

4. **Get Your Public Key**
   - Go to Account > API Keys
   - Copy your **Public Key**

5. **Configure Environment Variables**
   - Create a `.env` file in the root directory
   - Add the following:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID_PROJECT=your_project_template_id_here
     VITE_EMAILJS_TEMPLATE_ID_COURSE=your_course_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```
   - Replace the placeholder values with your actual IDs

6. **Restart Your Development Server**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Fallback Behavior

If EmailJS is not configured, the forms will automatically fall back to using `mailto:` links, which will open the user's email client with a pre-filled email to `support@bravonest.lk`.

## Testing

After setup, test the forms:
1. Fill out a Project Call Request form
2. Fill out a Course Enquiry form
3. Check your `support@bravonest.lk` inbox for the emails

## Troubleshooting

- **Emails not sending**: Check that all environment variables are set correctly
- **Template variables not working**: Make sure variable names match exactly (case-sensitive)
- **Service not working**: Verify your email service is connected and active in EmailJS dashboard

