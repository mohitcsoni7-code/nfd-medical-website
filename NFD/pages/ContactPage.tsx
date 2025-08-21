import { memo, useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageSquare,
  Users,
  Building2,
  Calendar,
  Download
} from 'lucide-react';
import { toast } from "sonner";
import { downloadCatalog, isCatalogAvailable } from '../utils/catalogUtils';

interface ContactPageProps {
  colors: any;
  onBack: () => void;
  onFormSubmit?: () => void;
}

const ContactPage = memo(({ colors, onBack, onFormSubmit }: ContactPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    inquiryType: '',
    urgency: '',
    subject: '',
    message: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! Check console for details.');
    console.log('Form submitted!', { formData, onFormSubmit });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('API response:', { response: response.ok, result });

      if (response.ok && result.ok) {
        console.log('Success! Calling onFormSubmit...');
        alert('API call successful! Navigating to thank you page...');
        // Always call onFormSubmit to navigate to thank you page
        if (onFormSubmit) {
          onFormSubmit();
        }
        // Also show success message
        toast("Message sent successfully! We'll get back to you within 24 hours.");
        // Reset form
        setFormData({
          name: '', email: '', phone: '', company: '', jobTitle: '',
          inquiryType: '', urgency: '', subject: '', message: ''
        });
      } else {
        toast(`Failed to send message: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast("There was an error sending your message. Please try again.");
    }
  }, [formData, onFormSubmit]);

  const handleDownloadCatalog = useCallback(() => {
    if (!isCatalogAvailable()) {
      toast("Product catalog will be available soon!");
      return;
    }
    
    const success = downloadCatalog();
    if (success) {
      toast("Product catalog download started!");
    } else {
      toast("Unable to download catalog. Please try again.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl" style={{ color: colors.primary }}>Contact Us</h1>
              <p className="mt-2" style={{ color: colors.secondary }}>
                Get in touch with our medical device experts
              </p>
            </div>
            <Button 
              onClick={onBack}
              variant="outline"
              className="transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form - Now First */}
          <Card className="p-8" style={{ borderColor: colors.accent + '30' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl" style={{ color: colors.primary }}>Send us a Message</h2>
                <p style={{ color: colors.secondary }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="john.doe@hospital.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Phone Number</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="+91-XXXXX XXXXX"
                  />
                </div>
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Job Title</label>
                  <Input
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="Interventional Radiologist"
                  />
                </div>
              </div>

              {/* Organization Information */}
              <div className="space-y-2">
                <label style={{ color: '#334155' }}>Organization</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ borderColor: colors.accent + '50' }}
                  placeholder="Hospital/Clinic Name"
                />
              </div>

              {/* Inquiry Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Inquiry Type *</label>
                  <Select 
                    value={formData.inquiryType} 
                    onValueChange={(value) => handleSelectChange('inquiryType', value)}
                    required
                  >
                    <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-information">Product Information</SelectItem>
                      <SelectItem value="technical-support">Technical Support</SelectItem>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="training">Training & Education</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Urgency</label>
                  <Select 
                    value={formData.urgency} 
                    onValueChange={(value) => handleSelectChange('urgency', value)}
                  >
                    <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - General Inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Within a Week</SelectItem>
                      <SelectItem value="high">High - Within 24 Hours</SelectItem>
                      <SelectItem value="urgent">Urgent - Immediate Response</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label style={{ color: '#334155' }}>Subject *</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  style={{ borderColor: colors.accent + '50' }}
                  placeholder="Brief subject of your inquiry"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label style={{ color: '#334155' }}>Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  style={{ borderColor: colors.accent + '50' }}
                  placeholder="Please provide detailed information about your inquiry, including any specific product interests, technical requirements, or questions you may have..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full text-white"
                style={{ backgroundColor: colors.accent }}
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-sm text-center" style={{ color: colors.secondary }}>
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </Card>

          {/* Contact Information - Now Second */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <Card className="p-8" style={{ borderColor: colors.accent + '30' }}>
              <h2 className="text-xl mb-6" style={{ color: colors.primary }}>Get in Touch</h2>
              
              <div className="space-y-6">
                {/* Phone Contact */}
                <div className="flex items-start space-x-4">
                  <a 
                    href="tel:+918850270047"
                    className="w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: colors.iconBgs.emerald }}
                    aria-label="Call us at +91-88502 70047"
                  >
                    <Phone className="w-6 h-6" style={{ color: colors.iconColors.emerald }} />
                  </a>
                  <div className="flex-1">
                    <h3 className="text-lg" style={{ color: colors.primary }}>Call Us</h3>
                    <a 
                      href="tel:+918850270047" 
                      className="hover:underline transition-colors"
                      style={{ color: colors.secondary }}
                    >
                      +91-88502 70047
                    </a>
                    <p className="text-sm mt-1" style={{ color: colors.secondary }}>
                      Monday - Friday: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.cyan }}>
                    <Mail className="w-6 h-6" style={{ color: colors.iconColors.cyan }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg" style={{ color: colors.primary }}>Email Us</h3>
                    <a 
                      href="mailto:hello@neuroflowdynamics.com"
                      className="hover:underline transition-colors"
                      style={{ color: colors.secondary }}
                    >
                      hello@neuroflowdynamics.com
                    </a>
                    <p className="text-sm mt-1" style={{ color: colors.secondary }}>
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Office Visit */}
                <div className="flex items-start space-x-4">
                  <a 
                    href="https://share.google/fNiVe9HY0ENWLzeG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: colors.iconBgs.orange }}
                    aria-label="View our location on Google Maps"
                  >
                    <MapPin className="w-6 h-6" style={{ color: colors.iconColors.orange }} />
                  </a>
                  <div className="flex-1">
                    <h3 className="text-lg" style={{ color: colors.primary }}>Visit Our Office</h3>
                    <p style={{ color: colors.secondary }}>
                      Office 207, Town Centre 1, A.K. Road, Marol Naka, Andheri (E), Mumbai – 400 059
                    </p>
                    <a 
                      href="https://share.google/fNiVe9HY0ENWLzeG6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-1 hover:underline transition-colors"
                      style={{ color: colors.accent }}
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8" style={{ borderColor: colors.accent + '30' }}>
              <h2 className="text-xl mb-6" style={{ color: colors.primary }}>Business Hours</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.secondary }}>Monday - Friday</span>
                  <span style={{ color: colors.primary }}>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.secondary }}>Saturday</span>
                  <span style={{ color: colors.primary }}>10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.secondary }}>Sunday</span>
                  <span style={{ color: colors.primary }}>Closed</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t" style={{ borderColor: colors.accent + '30' }}>
                  <span style={{ color: colors.secondary }}>Emergency Contact</span>
                  <span style={{ color: colors.primary }}>24/7 Available</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-8" style={{ borderColor: colors.accent + '30' }}>
              <h2 className="text-xl mb-6" style={{ color: colors.primary }}>Quick Actions</h2>
              
              <div className="space-y-4">
                <Button 
                  className="w-full justify-start text-white"
                  style={{ backgroundColor: colors.accent }}
                  onClick={() => toast("Scheduling system will be available soon!")}
                >
                  <Calendar className="w-4 h-4 mr-3" />
                  Contact Us
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start transition-colors"
                  style={{ borderColor: colors.accent + '50', color: colors.secondary }}
                  onClick={handleDownloadCatalog}
                >
                  <Download className="w-4 h-4 mr-3" />
                  Download Product Catalog
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full justify-start transition-colors"
                  style={{ borderColor: colors.accent + '50', color: colors.secondary }}
                  onClick={() => toast("Support portal will be available soon!")}
                >
                  <Users className="w-4 h-4 mr-3" />
                  Technical Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
});

ContactPage.displayName = 'ContactPage';

export default ContactPage;