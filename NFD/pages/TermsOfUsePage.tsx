import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Shield, FileText, Users, AlertTriangle } from 'lucide-react';

interface TermsOfUsePageProps {
  colors: any;
  onBack: () => void;
}

const TermsOfUsePage = memo(({ colors, onBack }: TermsOfUsePageProps) => {
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
            <FileText className="w-8 h-8" style={{ color: colors.accent }} />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4" style={{ color: colors.primary }}>Terms of Use</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.secondary }}>
            These terms govern your use of NFD's website and services. Please read them carefully.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Acceptance of Terms */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.blue }}>
                <Shield className="w-5 h-5" style={{ color: colors.iconColors.blue }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>1. Acceptance of Terms</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    By accessing and using the NFD (Neuro Flow Dynamics) website and services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p>
                    These Terms of Use apply to all visitors, users, and others who access or use our website, products, and services.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Medical Device Information */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.emerald }}>
                <AlertTriangle className="w-5 h-5" style={{ color: colors.iconColors.emerald }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>2. Medical Device Information</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    <strong>Professional Use Only:</strong> All medical devices and information provided on this website are intended for use by qualified healthcare professionals only.
                  </p>
                  <p>
                    <strong>Not for Consumer Use:</strong> Our products are not intended for direct consumer purchase or use. All devices require proper training and certification.
                  </p>
                  <p>
                    <strong>Regulatory Compliance:</strong> Products are subject to regulatory approval in respective jurisdictions. Please consult local regulations before use.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Use of Website */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.orange }}>
                <Users className="w-5 h-5" style={{ color: colors.iconColors.orange }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>3. Use of Website</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>You may use our website for lawful purposes only. You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Use the site in any way that violates applicable laws or regulations</li>
                    <li>Transmit any harmful or malicious code</li>
                    <li>Interfere with or disrupt the website's functionality</li>
                    <li>Attempt to gain unauthorized access to any part of the website</li>
                    <li>Use automated systems to access the website without permission</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>4. Intellectual Property Rights</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                The website and its content, including but not limited to text, graphics, images, logos, and software, are the property of NFD and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content without our express written consent.
              </p>
            </div>
          </Card>

          {/* Product Information */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>5. Product Information and Availability</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                Product information on this website is for informational purposes only. Specifications, availability, and regulatory approvals may vary by region.
              </p>
              <p>
                We reserve the right to modify product specifications, discontinue products, or change availability without prior notice.
              </p>
            </div>
          </Card>

          {/* Privacy and Data */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>6. Privacy and Data Collection</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
              </p>
              <p>
                By using our website, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </div>
          </Card>

          {/* Disclaimers */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>7. Disclaimers and Limitation of Liability</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                <strong>Medical Disclaimer:</strong> Information on this website is for educational purposes only and should not be considered medical advice. Always consult qualified healthcare professionals.
              </p>
              <p>
                <strong>Website Disclaimer:</strong> The website is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or timeliness of the information.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, NFD shall not be liable for any indirect, incidental, special, or consequential damages.
              </p>
            </div>
          </Card>

          {/* Changes to Terms */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>8. Changes to Terms</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will become effective immediately upon posting to the website.
              </p>
              <p>
                Your continued use of the website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>9. Contact Information</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                If you have questions about these Terms of Use, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@neuroflowdynamics.com</p>
                <p><strong>Phone:</strong> +91-88502 70047</p>
                <p><strong>Address:</strong> Office 207, Town Centre 1, A.K. Road, Marol Naka, Andheri (E), Mumbai – 400 059, India</p>
              </div>
            </div>
          </Card>

        </div>

        {/* Back to Top Button */}
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

TermsOfUsePage.displayName = 'TermsOfUsePage';

export default TermsOfUsePage;