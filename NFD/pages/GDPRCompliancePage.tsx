import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Shield, CheckCircle, Users, Database, FileText, Globe } from 'lucide-react';

interface GDPRCompliancePageProps {
  colors: any;
  onBack: () => void;
}

const GDPRCompliancePage = memo(({ colors, onBack }: GDPRCompliancePageProps) => {
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
              GDPR Compliance Framework
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
          <h1 className="text-3xl sm:text-4xl mb-4" style={{ color: colors.primary }}>GDPR Compliance</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.secondary }}>
            Our commitment to protecting your personal data under the General Data Protection Regulation (GDPR).
          </p>
        </div>

        {/* GDPR Overview */}
        <Card className="p-6 mb-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.blue }}>
              <Globe className="w-5 h-5" style={{ color: colors.iconColors.blue }} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Our GDPR Commitment</h2>
              <p style={{ color: colors.secondary }}>
                NFD (Neuro Flow Dynamics) is committed to protecting the privacy and personal data of all individuals, 
                particularly healthcare professionals who interact with our medical device solutions. We comply with the 
                EU General Data Protection Regulation (GDPR) and similar privacy laws worldwide.
              </p>
            </div>
          </div>
        </Card>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Legal Basis for Processing */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.emerald }}>
                <FileText className="w-5 h-5" style={{ color: colors.iconColors.emerald }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>1. Legal Basis for Processing</h2>
                <div className="space-y-4" style={{ color: colors.secondary }}>
                  <p>We process personal data based on the following legal grounds under GDPR Article 6:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Legitimate Interest</span>
                      </div>
                      <p className="text-sm ml-6">Providing medical device information and support to healthcare professionals</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Consent</span>
                      </div>
                      <p className="text-sm ml-6">Marketing communications and non-essential cookies</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Contract Performance</span>
                      </div>
                      <p className="text-sm ml-6">Fulfilling orders, training, and support services</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Legal Obligation</span>
                      </div>
                      <p className="text-sm ml-6">Regulatory compliance and safety reporting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Your GDPR Rights */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.orange }}>
                <Users className="w-5 h-5" style={{ color: colors.iconColors.orange }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>2. Your GDPR Rights</h2>
                <div className="space-y-4" style={{ color: colors.secondary }}>
                  <p>Under GDPR, you have the following rights regarding your personal data:</p>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Information (Articles 13-14)</h3>
                      <p className="text-sm">Clear information about how we process your data</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 ClassName="font-medium" style={{ color: colors.primary }}>Right of Access (Article 15)</h3>
                      <p className="text-sm">Request copies of your personal data</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Rectification (Article 16)</h3>
                      <p className="text-sm">Correct inaccurate or incomplete personal data</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Erasure (Article 17)</h3>
                      <p className="text-sm">Request deletion of your personal data ("Right to be Forgotten")</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Restrict Processing (Article 18)</h3>
                      <p className="text-sm">Limit how we process your personal data</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Data Portability (Article 20)</h3>
                      <p className="text-sm">Receive your data in a structured, machine-readable format</p>
                    </div>
                    
                    <div className="border-l-4 pl-4" style={{ borderColor: colors.accent }}>
                      <h3 className="font-medium" style={{ color: colors.primary }}>Right to Object (Article 21)</h3>
                      <p className="text-sm">Object to processing based on legitimate interests or direct marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Processing Principles */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.cyan }}>
                <Database className="w-5 h-5" style={{ color: colors.iconColors.cyan }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>3. Data Processing Principles</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>We ensure all personal data processing adheres to GDPR principles:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Lawfulness, Fairness & Transparency</span>
                      </h4>
                      <p className="text-sm ml-6">Clear legal basis and transparent processing</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Purpose Limitation</span>
                      </h4>
                      <p className="text-sm ml-6">Data used only for specified purposes</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Data Minimization</span>
                      </h4>
                      <p className="text-sm ml-6">Only collect necessary data</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Accuracy</span>
                      </h4>
                      <p className="text-sm ml-6">Keep data accurate and up-to-date</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Storage Limitation</span>
                      </h4>
                      <p className="text-sm ml-6">Retain data only as long as necessary</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium flex items-center space-x-2" style={{ color: colors.primary }}>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Integrity & Confidentiality</span>
                      </h4>
                      <p className="text-sm ml-6">Secure processing and protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* International Transfers */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>4. International Data Transfers</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>When transferring personal data outside the EU/EEA, we ensure appropriate safeguards:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Adequacy Decisions:</strong> Countries recognized by the EU as providing adequate protection</li>
                <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved contract terms for data protection</li>
                <li><strong>Binding Corporate Rules:</strong> Internal privacy rules approved by EU authorities</li>
                <li><strong>Certification Schemes:</strong> Professional healthcare data protection certifications</li>
              </ul>
            </div>
          </Card>

          {/* Data Breach Response */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>5. Data Breach Response</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>We have robust procedures for handling potential data breaches:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Detection & Assessment</h4>
                  <p className="text-sm">Immediate breach identification and risk evaluation</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Authority Notification</h4>
                  <p className="text-sm">Report to supervisory authorities within 72 hours</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Individual Notification</h4>
                  <p className="text-sm">Inform affected individuals when required</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Healthcare Professional Specific Protections */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>6. Healthcare Professional Data Protection</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>Special considerations for healthcare professionals under GDPR:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Professional Confidentiality:</strong> Additional layers of protection for medical professional data</li>
                <li><strong>Regulatory Compliance:</strong> Alignment with medical device regulations and healthcare privacy laws</li>
                <li><strong>Institutional Policies:</strong> Respect for hospital and clinic data handling requirements</li>
                <li><strong>Professional Licensing:</strong> Protection of professional license and certification information</li>
                <li><strong>Continuing Education:</strong> Secure handling of training and certification records</li>
              </ul>
            </div>
          </Card>

          {/* Exercising Your Rights */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>7. How to Exercise Your Rights</h2>
            <div className="space-y-4" style={{ color: colors.secondary }}>
              <p>To exercise any of your GDPR rights, please contact us using the following methods:</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.blue }}>
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Online Request Form</h4>
                    <p className="text-sm">Submit a privacy request through our secure online portal</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.emerald }}>
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Email</h4>
                    <p className="text-sm">gdpr@neuroflowdynamics.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.orange }}>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Phone</h4>
                    <p className="text-sm">+91-88502 70047 (Option 4 for Privacy)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-sm" style={{ color: '#1e40af' }}>
                  <strong>Response Time:</strong> We will respond to your request within one month (30 days) as required by GDPR. 
                  Complex requests may take up to three months with prior notification.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Protection Officer */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>8. Data Protection Officer (DPO)</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>Our appointed Data Protection Officer oversees GDPR compliance:</p>
              <div className="space-y-2">
                <p><strong>Name:</strong> Dr. Sarah Medical Data Protection Officer</p>
                <p><strong>Email:</strong> dpo@neuroflowdynamics.com</p>
                <p><strong>Role:</strong> Independent oversight of data protection practices</p>
                <p><strong>Expertise:</strong> Medical device regulations and healthcare data privacy</p>
              </div>
            </div>
          </Card>

          {/* Supervisory Authority */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>9. Right to Lodge a Complaint</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>
                If you believe we have not handled your personal data properly, you have the right to lodge a complaint 
                with a supervisory authority in your country or where the alleged breach occurred.
              </p>
              <div className="space-y-2">
                <p><strong>EU Supervisory Authorities:</strong> <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Find your local authority</a></p>
                <p><strong>Our Lead Authority:</strong> Irish Data Protection Commission (for EU operations)</p>
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

GDPRCompliancePage.displayName = 'GDPRCompliancePage';

export default GDPRCompliancePage;