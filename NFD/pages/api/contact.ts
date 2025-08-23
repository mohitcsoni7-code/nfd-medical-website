import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  inquiryType?: string;
  urgency?: string;
  subject?: string;
  message: string;
};

type ApiResponse = {
  ok: boolean;
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ 
        ok: false, 
        error: 'Please enter a valid email address' 
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact request
    
    // For now, we'll just log it and return success
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...formData
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    res.status(200).json({ 
      ok: true, 
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({ 
      ok: false, 
      error: 'Internal server error. Please try again later.' 
    });
  }
}
