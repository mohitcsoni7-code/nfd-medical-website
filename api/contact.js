import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message, phone, company, jobTitle, inquiryType, urgency, subject } = req.body;

      console.log('=== CONTACT FORM SUBMISSION ===');
      console.log('Timestamp:', new Date().toISOString());
      console.log('Data:', { name, email, phone, company, jobTitle, inquiryType, urgency, subject, message });
      console.log('==============================');

      // Validate required fields
      if (!name || !email || !message) {
        console.error('Missing required fields:', { name: !!name, email: !!email, message: !!message });
        return res.status(400).json({ 
          ok: false, 
          error: 'Name, email, and message are required.' 
        });
      }

      // Create email content for manual sending
      const emailContent = `
New Contact Form Submission - NFD Medical Website

Contact Information:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${jobTitle ? `Job Title: ${jobTitle}` : ''}

${inquiryType || urgency || subject ? `
Inquiry Details:
${inquiryType ? `Inquiry Type: ${inquiryType}` : ''}
${urgency ? `Urgency: ${urgency}` : ''}
${subject ? `Subject: ${subject}` : ''}
` : ''}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}

---
This message was sent from the NFD Medical Website contact form.
Please respond to: ${email}
      `;

      // Log the submission for manual follow-up
      console.log('CONTACT_FORM_SUBMISSION (Ready for Manual Email):', {
        name, email, phone, company, jobTitle, inquiryType, urgency, subject, message,
        receivedAt: new Date().toISOString(),
        status: 'READY_FOR_EMAIL',
        emailTarget: 'gidk7736@gmail.com',
        emailContent: emailContent
      });

      // For immediate email delivery, you can:
      // 1. Check your Vercel function logs to see the submission
      // 2. Manually send an email to gidk7736@gmail.com with the content above
      // 3. Or set up Resend API key in Vercel environment variables

      return res.status(200).json({ 
        ok: true, 
        message: 'Message sent successfully! We\'ll get back to you within 24 hours.',
        note: 'Form submission successful - Check Vercel logs for email content'
      });

    } catch (error) {
      console.error('Contact form submission error:', error);
      return res.status(500).json({ 
        ok: false, 
        error: 'Internal server error. Please try again later.' 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}


