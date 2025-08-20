import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Users } from 'lucide-react';

interface CookiePolicyPageProps {
  colors: any;
  onBack: () => void;
}

const CookiePolicyPage = memo(({ colors, onBack }: CookiePolicyPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              onClick={onBack}
              variant="ghost"
              className="flex items-center space-x-2"
              style={{ color: colors.primary }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>
            <div className="text-sm" style={{ color: colors.secondary }}>
              Last updated: January 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.accent + '20' }}>
            <Cookie className="w-8 h-8" style={{ color: colors.accent }} />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4" style={{ color: colors.primary }}>Cookie Policy</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.secondary }}>
            Learn how we use cookies and similar technologies to improve your experience on our website.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* What Are Cookies */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.blue }}>
                <Cookie className="w-5 h-5" style={{ color: colors.iconColors.blue }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>1. What Are Cookies?</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                  </p>
                  <p>
                    We use cookies responsibly and only collect information necessary to improve our medical device information services for healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Types of Cookies */}
          <Card className="p-6">
            <h2 className="text-xl mb-4" style={{ color: colors.primary }}>2. Types of Cookies We Use</h2>
            
            {/* Essential Cookies */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.emerald }}>
                  <Shield className="w-4 h-4" style={{ color: colors.iconColors.emerald }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Essential Cookies</h3>
                  <p className="text-sm mb-2" style={{ color: colors.secondary }}>
                    These cookies are necessary for the website to function properly. They cannot be disabled.
                  </p>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    <strong>Examples:</strong> Session management, security, form submission, theme preferences
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.orange }}>
                  <BarChart3 className="w-4 h-4" style={{ color: colors.iconColors.orange }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Analytics Cookies</h3>
                  <p className="text-sm mb-2" style={{ color: colors.secondary }}>
                    These help us understand how healthcare professionals use our website to improve our services.
                  </p>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    <strong>Examples:</strong> Page views, time spent on site, popular content, user journey analysis
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.cyan }}>
                  <Settings className="w-4 h-4" style={{ color: colors.iconColors.cyan }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Functional Cookies</h3>
                  <p className="text-sm mb-2" style={{ color: colors.secondary }}>
                    These cookies enable enhanced functionality and personalization.
                  </p>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    <strong>Examples:</strong> Language preferences, region settings, professional specialization
                  </div>
                </div>
              </div>

              {/* Targeting Cookies */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.indigo }}>
                  <Users className="w-4 h-4" style={{ color: colors.iconColors.indigo }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Targeting/Marketing Cookies</h3>
                  <p className="text-sm mb-2" style={{ color: colors.secondary }}>
                    These cookies help us deliver relevant medical device information and educational content.
                  </p>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    <strong>Examples:</strong> Content personalization, relevant product recommendations, professional interests
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Cookie Duration */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>3. Cookie Duration</h2>
            <div className="space-y-4" style={{ color: colors.secondary }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Session Cookies</h3>
                  <p className="text-sm">
                    Temporary cookies that are deleted when you close your browser. Used for essential website functionality and security.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Persistent Cookies</h3>
                  <p className="text-sm">
                    Stored on your device for a specific period (typically 1-24 months) to remember your preferences and improve user experience.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Third-Party Cookies */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>4. Third-Party Services</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>We use trusted third-party services that may set their own cookies:</p>
              <div className="space-y-4">
                <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                  <h4 className="font-medium" style={{ color: colors.primary }}>Google Analytics</h4>
                  <p className="text-sm">Helps us understand website usage patterns and improve user experience.</p>
                  <p className="text-xs mt-1">Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</a></p>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                  <h4 className="font-medium" style={{ color: colors.primary }}>Professional Networks</h4>
                  <p className="text-sm">Integration with medical professional platforms for content sharing and networking.</p>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                  <h4 className="font-medium" style={{ color: colors.primary }}>Content Delivery Networks</h4>
                  <p className="text-sm">Ensure fast and reliable delivery of website content and resources.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Managing Cookies */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>5. Managing Your Cookie Preferences</h2>
            <div className="space-y-4" style={{ color: colors.secondary }}>
              <p>You have control over how cookies are used on our website:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Browser Settings</h3>
                  <p className="text-sm mb-2">Most browsers allow you to:</p>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific sites</li>
                    <li>Block third-party cookies</li>
                    <li>Clear cookies when closing the browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Opt-Out Links</h3>
                  <div className="space-y-2 text-sm">
                    <p>• <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></p>
                    <p>• <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NAI Opt-out Tool</a></p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm" style={{ color: '#d97706' }}>
                    <strong>Note:</strong> Disabling certain cookies may limit website functionality and affect your user experience, particularly for features designed to assist healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Healthcare Professional Considerations */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>6. Healthcare Professional Considerations</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>As a medical device company serving healthcare professionals, we take special care to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Protect confidentiality of professional interactions</li>
                <li>Comply with medical device regulations regarding data collection</li>
                <li>Ensure cookies don't interfere with critical medical device information</li>
                <li>Maintain separation between educational content and promotional materials</li>
                <li>Respect professional privacy and institutional policies</li>
              </ul>
            </div>
          </Card>

          {/* Updates to Policy */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>7. Updates to This Policy</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                We may update this Cookie Policy periodically to reflect changes in our practices or regulatory requirements. 
                We will notify healthcare professionals of significant changes through our website or direct communication.
              </p>
              <p>
                The "Last Updated" date at the top of this policy indicates when the most recent changes were made.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>8. Questions About Cookies</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>If you have questions about our use of cookies or need assistance with cookie settings:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@neuroflowdynamics.com</p>
                <p><strong>Phone:</strong> +91-88502 70047</p>
                <p><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
              </div>
            </div>
          </Card>

        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Button
            onClick={onBack}
            style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
            className="text-white"
          >
            Back to Home
          </Button>
        </div>

      </div>
    </div>
  );
});

CookiePolicyPage.displayName = 'CookiePolicyPage';

export default CookiePolicyPage;