import emailjs from '@emailjs/browser';

// EmailJS configuration
// To set up EmailJS:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create email templates
// 4. Get your Public Key, Service ID, and Template IDs
// 5. Add them to your .env file or replace the values below

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID_PROJECT = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PROJECT || 'your_template_id_project';
const EMAILJS_TEMPLATE_ID_COURSE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COURSE || 'your_template_id_course';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'your_public_key') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

interface ProjectFormData {
  name: string;
  email: string;
  projectType: string;
  description: string;
  timeWindow?: string;
}

interface CourseFormData {
  name: string;
  email: string;
  course: string;
  message?: string;
}

export const sendProjectEmail = async (data: ProjectFormData): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'your_public_key' || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_PROJECT) {
      // Fallback to mailto if EmailJS is not configured
      return sendViaMailto('project', {
        subject: `Project Call Request - ${data.projectType}`,
        body: `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nPreferred Time Window: ${data.timeWindow || 'Not specified'}\n\nDescription:\n${data.description}`,
      });
    }

    const templateParams = {
      to_email: 'support@bravonest.lk',
      from_name: data.name,
      from_email: data.email,
      project_type: data.projectType,
      description: data.description,
      time_window: data.timeWindow || 'Not specified',
      reply_to: data.email,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_PROJECT,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Error sending project email:', error);
    // Fallback to mailto on error
    return sendViaMailto('project', {
      subject: `Project Call Request - ${data.projectType}`,
      body: `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nPreferred Time Window: ${data.timeWindow || 'Not specified'}\n\nDescription:\n${data.description}`,
    });
  }
};

export const sendCourseEmail = async (data: CourseFormData): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (EMAILJS_PUBLIC_KEY === 'your_public_key' || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID_COURSE) {
      // Fallback to mailto if EmailJS is not configured
      return sendViaMailto('course', {
        subject: `Course Enquiry - ${data.course}`,
        body: `Name: ${data.name}\nEmail: ${data.email}\nCourse of Interest: ${data.course}\n\nMessage:\n${data.message || 'No additional message provided'}`,
      });
    }

    const templateParams = {
      to_email: 'support@bravonest.lk',
      from_name: data.name,
      from_email: data.email,
      course: data.course,
      message: data.message || 'No additional message provided',
      reply_to: data.email,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_COURSE,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Error sending course email:', error);
    // Fallback to mailto on error
    return sendViaMailto('course', {
      subject: `Course Enquiry - ${data.course}`,
      body: `Name: ${data.name}\nEmail: ${data.email}\nCourse of Interest: ${data.course}\n\nMessage:\n${data.message || 'No additional message provided'}`,
    });
  }
};

// Fallback mailto function
const sendViaMailto = (type: 'project' | 'course', { subject, body }: { subject: string; body: string }): boolean => {
  const mailtoLink = `mailto:support@bravonest.lk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
  return true;
};

