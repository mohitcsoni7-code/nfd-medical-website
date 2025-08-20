import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  CheckCircle, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  Download,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface ThankYouPageProps {
  colors: any;
  onBack: () => void;
  onGoHome: () => void;
}

const ThankYouPage = memo(({ colors, onBack, onGoHome }: ThankYouPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl" style={{ color: colors.primary }}>Thank You</h1>
              <p className="mt-2" style={{ color: colors.secondary }}>
                Your message has been received successfully
              </p>
            </div>
            <Button 
              onClick={onGoHome}
              variant="outline"
              className="transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
            >
              ← Back to Home
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Success Message */}
        <Card className="p-8 mb-8 text-center" style={{ borderColor: colors.accent + '30' }}>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.emerald }}>
            <CheckCircle className="w-8 h-8" style={{ color: colors.iconColors.emerald }} />
          </div>
          
          <h2 className="text-2xl mb-4" style={{ color: colors.primary }}>Message Sent Successfully!</h2>
          
          <p className="text-lg mb-6" style={{ color: colors.secondary }}>
            Thank you for contacting Neuro Flow Dynamics. We have received your message and our team will review it carefully.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800">Expected Response Time</span>
            </div>
            <p className="text-blue-700">
              <strong>Within 24 hours</strong> during business days
            </p>
            <p className="text-sm text-blue-600 mt-1">
              Urgent inquiries will be prioritized and may receive faster response
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* What Happens Next */}
          <Card className="p-6" style={{ borderColor: colors.accent + '30' }}>
            <h3 className="text-lg mb-4" style={{ color: colors.primary }}>What Happens Next?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: colors.accent }}>
                  1
                </div>
                <div>
                  <p style={{ color: colors.primary }}>Message Review</p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    Our expert team will review your inquiry and determine the best way to assist you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: colors.accent }}>
                  2
                </div>
                <div>
                  <p style={{ color: colors.primary }}>Expert Assignment</p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    We'll assign the right specialist from our team to address your specific needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: colors.accent }}>
                  3
                </div>
                <div>
                  <p style={{ color: colors.primary }}>Personalized Response</p>
                  <p className="text-sm" style={{ color: colors.secondary }}>
                    You'll receive a detailed response with solutions tailored to your requirements.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Immediate Support */}
          <Card className="p-6" style={{ borderColor: colors.accent + '30' }}>
            <h3 className="text-lg mb-4" style={{ color: colors.primary }}>Need Immediate Support?</h3>
            
            <div className="space-y-4">
              {/* Phone Contact */}
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.iconBgs.emerald + '20' }}>
                <Phone className="w-5 h-5" style={{ color: colors.iconColors.emerald }} />
                <div>
                  <p style={{ color: colors.primary }}>Call Us Directly</p>
                  <a 
                    href="tel:+918850270047" 
                    className="hover:underline transition-colors"
                    style={{ color: colors.secondary }}
                  >
                    +91-88502 70047
                  </a>
                </div>
              </div>
              
              {/* Email Contact */}
              <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: colors.iconBgs.cyan + '20' }}>
                <Mail className="w-5 h-5" style={{ color: colors.iconColors.cyan }} />
                <div>
                  <p style={{ color: colors.primary }}>Email Us</p>
                  <a 
                    href="mailto:hello@neuroflowdynamics.com"
                    className="hover:underline transition-colors"
                    style={{ color: colors.secondary }}
                  >
                    hello@neuroflowdynamics.com
                  </a>
                </div>
              </div>

              <p className="text-sm text-center pt-2" style={{ color: colors.secondary }}>
                For urgent medical device inquiries, please call directly
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Actions */}
        <Card className="p-6 mt-8" style={{ borderColor: colors.accent + '30' }}>
          <h3 className="text-lg mb-4" style={{ color: colors.primary }}>While You Wait</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline"
              className="justify-start transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
              onClick={() => toast("Product catalog will be available soon!")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Catalog
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
              onClick={() => toast("Scheduling system will be available soon!")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
              onClick={onGoHome}
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Explore Products
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
              onClick={onBack}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Another Message
            </Button>
          </div>
        </Card>

        {/* Reference Information */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg border-l-4" style={{ borderLeftColor: colors.accent }}>
          <p className="text-sm" style={{ color: colors.secondary }}>
            <strong>Reference ID:</strong> NFD-{new Date().getFullYear()}-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-sm mt-1" style={{ color: colors.secondary }}>
            Please keep this reference ID for your records. You can quote this ID when following up on your inquiry.
          </p>
        </div>
      </div>
    </div>
  );
});

ThankYouPage.displayName = 'ThankYouPage';

export default ThankYouPage;