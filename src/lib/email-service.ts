// Email service using FormSubmit - works immediately without any setup
// FormSubmit is a free service that sends emails directly to the specified address
const RECIPIENT_EMAIL = 'support@bravonest.lk';

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
    const emailBody = `
New Project Call Request

Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType}
Preferred Time Window: ${data.timeWindow || 'Not specified'}

Description:
${data.description}

---
This email was sent from the Bravonest website contact form.
Reply directly to this email to respond to ${data.name} at ${data.email}
    `.trim();

    const formData = new FormData();
    formData.append('email', RECIPIENT_EMAIL);
    formData.append('name', data.name);
    formData.append('subject', `Project Call Request - ${data.projectType}`);
    formData.append('message', emailBody);
    formData.append('_replyto', data.email);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_format', 'plain');

    const response = await fetch('https://formsubmit.co/ajax/support@bravonest.lk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    
    if (result.success) {
      return true;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error sending project email:', error);
    throw error; // Re-throw to let the UI handle the error
  }
};

export const sendCourseEmail = async (data: CourseFormData): Promise<boolean> => {
  try {
    const emailBody = `
New Course Enquiry

Name: ${data.name}
Email: ${data.email}
Course of Interest: ${data.course}

Message:
${data.message || 'No additional message provided'}

---
This email was sent from the Bravonest website contact form.
Reply directly to this email to respond to ${data.name} at ${data.email}
    `.trim();

    const formData = new FormData();
    formData.append('email', RECIPIENT_EMAIL);
    formData.append('name', data.name);
    formData.append('subject', `Course Enquiry - ${data.course}`);
    formData.append('message', emailBody);
    formData.append('_replyto', data.email);
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');
    formData.append('_format', 'plain');

    const response = await fetch('https://formsubmit.co/ajax/support@bravonest.lk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    
    if (result.success) {
      return true;
    } else {
      throw new Error(result.message || 'Failed to send email');
    }
  } catch (error) {
    console.error('Error sending course email:', error);
    throw error; // Re-throw to let the UI handle the error
  }
};


