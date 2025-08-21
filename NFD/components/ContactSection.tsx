import { memo, useState, useCallback } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

interface ContactSectionProps {
  colors: any;
  onNavigate: (sectionId: string) => void;
  onFormSubmit?: () => void;
}

const ContactSection = memo(({ colors, onNavigate, onFormSubmit }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        if (onFormSubmit) {
          onFormSubmit();
        } else {
          toast("Message sent successfully! We'll get back to you soon.");
        }
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        toast('Failed to send message. Please try again.');
      }
    } catch (err) {
      toast('Failed to send message. Please try again.');
    }
  }, [onFormSubmit, formData]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl" style={{ color: colors.primary }}>Let's Collaborate</h2>
              <p className="text-lg" style={{ color: colors.secondary }}>
                Have a question or need a custom solution? Our experts are ready to help you advance 
                your neuro-intervention capabilities.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.cyan }}>
                  <Mail className="w-6 h-6" style={{ color: colors.iconColors.cyan }} />
                </div>
                <div>
                  <p style={{ color: colors.primary }}>Email Us</p>
                  <p style={{ color: colors.secondary }}>hello@neuroflowdynamics.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+918850270047"
                  className="w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: colors.iconBgs.emerald }}
                  aria-label="Call us at +91-88502 70047"
                >
                  <Phone className="w-6 h-6" style={{ color: colors.iconColors.emerald }} />
                </a>
                <div>
                  <p style={{ color: colors.primary }}>Call Us</p>
                  <a 
                    href="tel:+918850270047" 
                    className="hover:underline transition-colors"
                    style={{ color: colors.secondary }}
                  >
                    +91-88502 70047
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
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
                <div>
                  <p style={{ color: colors.primary }}>Visit Us</p>
                  <p style={{ color: colors.secondary }}>Office 207, Town Centre 1, A.K. Road, Marol Naka, Andheri (E), Mumbai – 400 059</p>
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
            
            <div className="flex justify-start">
              <Button 
                onClick={() => onNavigate('contact')}
                className="text-white"
                style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
              >
                Send a Message
              </Button>
            </div>
          </div>
          
          <Card className="p-8 shadow-lg" style={{ borderColor: colors.accent + '30' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl" style={{ color: colors.primary }}>Get in Touch</h3>
                <p style={{ color: colors.secondary }}>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label style={{ color: '#334155' }}>Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{ borderColor: colors.accent + '50' }}
                    placeholder="+91-XXXXX XXXXX"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label style={{ color: '#334155' }}>Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{ borderColor: colors.accent + '50' }}
                  placeholder="Your organization"
                />
              </div>
              
              <div className="space-y-2">
                <label style={{ color: '#334155' }}>Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  style={{ borderColor: colors.accent + '50' }}
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full text-white" style={{ backgroundColor: colors.accent }}>
                Send Message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;