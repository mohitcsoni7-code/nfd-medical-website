import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Shield, Database, Eye, Lock, UserCheck, Globe } from 'lucide-react';

interface PrivacyPolicyPageProps {
  colors: any;
  onBack: () => void;
}

const PrivacyPolicyPage = memo(({ colors, onBack }: PrivacyPolicyPageProps) => {
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
            <Shield className="w-8 h-8" style={{ color: colors.accent }} />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4" style={{ color: colors.primary }}>Privacy Policy</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.secondary }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Information We Collect */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.blue }}>
                <Database className="w-5 h-5" style={{ color: colors.iconColors.blue }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>1. Information We Collect</h2>
                <div className="space-y-4" style={{ color: colors.secondary }}>
                  <div>
                    <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Personal Information</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name, title, and professional credentials</li>
                      <li>Email address and phone number</li>
                      <li>Company/organization information</li>
                      <li>Professional license numbers (when applicable)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2" style={{ color: colors.primary }}>Technical Information</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.emerald }}>
                <Eye className="w-5 h-5" style={{ color: colors.iconColors.emerald }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>2. How We Use Your Information</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>We use collected information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Product Support:</strong> Providing technical assistance and customer service</li>
                    <li><strong>Communication:</strong> Responding to inquiries and providing product updates</li>
                    <li><strong>Compliance:</strong> Meeting regulatory and legal requirements</li>
                    <li><strong>Quality Improvement:</strong> Enhancing our products and services</li>
                    <li><strong>Professional Services:</strong> Facilitating training and certification programs</li>
                    <li><strong>Marketing:</strong> Sending relevant product information (with consent)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Security */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.orange }}>
                <Lock className="w-5 h-5" style={{ color: colors.iconColors.orange }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>3. Data Security</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: colors.primary }}>Technical Measures</h4>
                      <ul className="text-sm space-y-1">
                        <li>• SSL/TLS encryption</li>
                        <li>• Secure data storage</li>
                        <li>• Access controls</li>
                        <li>• Regular security audits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: colors.primary }}>Organizational Measures</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Employee training</li>
                        <li>• Confidentiality agreements</li>
                        <li>• Limited access policies</li>
                        <li>• Incident response procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Sharing */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>4. Information Sharing and Disclosure</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>We do not sell, trade, or rent your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (under strict confidentiality agreements)</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you have given explicit consent for sharing</li>
                <li><strong>Emergency Situations:</strong> To protect safety and prevent harm</li>
              </ul>
            </div>
          </Card>

          {/* Healthcare Professional Rights */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.cyan }}>
                <UserCheck className="w-5 h-5" style={{ color: colors.iconColors.cyan }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>5. Your Rights as a Healthcare Professional</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>As a healthcare professional, you have the following rights regarding your personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Request data deletion</li>
                      <li>Restrict processing</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Data portability</li>
                      <li>Object to processing</li>
                      <li>Withdraw consent</li>
                      <li>File complaints</li>
                    </ul>
                  </div>
                  <p className="mt-4">
                    To exercise these rights, please contact our Data Protection Officer at privacy@neuroflowdynamics.com
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* International Transfers */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.indigo }}>
                <Globe className="w-5 h-5" style={{ color: colors.iconColors.indigo }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>6. International Data Transfers</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    As a global medical device company, we may transfer your information to countries outside your home jurisdiction. We ensure appropriate safeguards are in place:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adequacy decisions by relevant authorities</li>
                    <li>Standard contractual clauses</li>
                    <li>Binding corporate rules</li>
                    <li>Professional certification requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Retention */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>7. Data Retention</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Customer Records:</strong> 7 years after last interaction</li>
                <li><strong>Training Records:</strong> As required by medical device regulations</li>
                <li><strong>Support Tickets:</strong> 3 years for quality assurance</li>
                <li><strong>Marketing Consents:</strong> Until withdrawn or 2 years of inactivity</li>
                <li><strong>Legal Requirements:</strong> As mandated by applicable laws</li>
              </ul>
            </div>
          </Card>

          {/* Medical Device Specific Privacy */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>8. Medical Device Regulatory Compliance</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                As a medical device manufacturer, we comply with additional privacy requirements under healthcare regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device Registration:</strong> Maintaining records of healthcare professional device users</li>
                <li><strong>Adverse Event Reporting:</strong> Collecting information required for safety reporting</li>
                <li><strong>Post-Market Surveillance:</strong> Monitoring device performance and user feedback</li>
                <li><strong>Regulatory Inspections:</strong> Providing information to regulatory authorities when required</li>
              </ul>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>9. Contact Our Privacy Team</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>For privacy-related questions or to exercise your rights, contact us:</p>
              <div className="space-y-2">
                <p><strong>Data Protection Officer:</strong> privacy@neuroflowdynamics.com</p>
                <p><strong>Privacy Hotline:</strong> +91-88502 70047 (Option 3)</p>
                <p><strong>Mail:</strong> Privacy Officer, NFD Neuro Flow Dynamics, Office 207, Town Centre 1, A.K. Road, Marol Naka, Andheri (E), Mumbai – 400 059, India</p>
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

PrivacyPolicyPage.displayName = 'PrivacyPolicyPage';

export default PrivacyPolicyPage;