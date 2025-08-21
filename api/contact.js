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

      // Check if Resend API key is configured
      if (!process.env.RESEND_API_KEY) {
        console.log('RESEND_API_KEY not configured - logging submission only');
        
        // Log the contact form data for manual follow-up
        console.log('CONTACT_FORM_SUBMISSION (No API Key):', {
          name, email, phone, company, jobTitle, inquiryType, urgency, subject, message,
          receivedAt: new Date().toISOString(),
          status: 'PENDING_EMAIL_SETUP'
        });

        return res.status(200).json({ 
          ok: true, 
          message: 'Message received! We\'ll get back to you within 24 hours.',
          note: 'Email system setup in progress'
        });
      }

      // If API key is available, try to send email
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Create email content
        const emailSubject = subject || `New Contact Form Submission from ${name}`;
        
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Contact Form Submission - NFD Medical Website
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #007bff; margin-bottom: 15px;">Contact Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
                ${jobTitle ? `<p><strong>Job Title:</strong> ${jobTitle}</p>` : ''}
              </div>
              
              ${inquiryType || urgency || subject ? `
              <div style="margin-bottom: 20px;">
                <h3 style="color: #007bff; margin-bottom: 15px;">Inquiry Details</h3>
                ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
                ${urgency ? `<p><strong>Urgency:</strong> ${urgency}</p>` : ''}
                ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
              </div>
              ` : ''}
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #007bff; margin-bottom: 15px;">Message</h3>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                <p>This message was sent from the NFD Medical Website contact form.</p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        `;

        const emailText = `
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
        `;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
          from: 'NFD Medical Website <noreply@nfd-medical.com>',
          to: ['mohitcsoni7@gmail.com'],
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
          reply_to: email,
        });

        if (error) {
          console.error('Resend email error:', error);
          throw new Error(`Email service error: ${error.message}`);
        }

        console.log('Contact form email sent successfully:', {
          messageId: data?.id,
          name, email, phone, company, jobTitle, inquiryType, urgency, subject, message,
          receivedAt: new Date().toISOString()
        });

        return res.status(200).json({ 
          ok: true, 
          message: 'Message sent successfully! We\'ll get back to you soon.',
          messageId: data?.id
        });

      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        
        // Log the contact form data for manual follow-up
        console.log('CONTACT_FORM_SUBMISSION (Email Failed):', {
          name, email, phone, company, jobTitle, inquiryType, urgency, subject, message,
          receivedAt: new Date().toISOString(),
          error: emailError.message,
          status: 'EMAIL_FAILED'
        });

        return res.status(200).json({ 
          ok: true, 
          message: 'Message received! We\'ll get back to you soon.',
          note: 'Email delivery issue - we\'ll contact you manually'
        });
      }

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


