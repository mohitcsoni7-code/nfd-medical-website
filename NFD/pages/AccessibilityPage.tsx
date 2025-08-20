import { memo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowLeft, Eye, Ear, Hand, Brain, Monitor, Keyboard, MousePointer } from 'lucide-react';

interface AccessibilityPageProps {
  colors: any;
  onBack: () => void;
}

const AccessibilityPage = memo(({ colors, onBack }: AccessibilityPageProps) => {
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
              WCAG 2.1 AA Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.accent + '20' }}>
            <Eye className="w-8 h-8" style={{ color: colors.accent }} />
          </div>
          <h1 className="text-3xl sm:text-4xl mb-4" style={{ color: colors.primary }}>Accessibility Statement</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.secondary }}>
            NFD is committed to ensuring digital accessibility for healthcare professionals and all users of our website.
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          
          {/* Our Commitment */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.blue }}>
                <Brain className="w-5 h-5" style={{ color: colors.iconColors.blue }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Our Accessibility Commitment</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>
                    NFD (Neuro Flow Dynamics) is committed to ensuring that our website and digital resources are accessible 
                    to all healthcare professionals, regardless of their abilities or disabilities. We strive to provide an 
                    inclusive experience that enables everyone to access critical medical device information.
                  </p>
                  <p>
                    We recognize that accessibility is not just about compliance—it's about ensuring that vital medical information 
                    and educational resources are available to all healthcare professionals who need them.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Accessibility Standards */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.emerald }}>
                <Monitor className="w-5 h-5" style={{ color: colors.iconColors.emerald }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Accessibility Standards</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>Our website is designed to conform to the following accessibility standards:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>WCAG 2.1 Level AA:</strong> Web Content Accessibility Guidelines 2.1 at the AA conformance level</li>
                    <li><strong>Section 508:</strong> U.S. federal accessibility requirements for healthcare organizations</li>
                    <li><strong>ADA Compliance:</strong> Americans with Disabilities Act digital accessibility requirements</li>
                    <li><strong>EN 301 549:</strong> European accessibility standard for public sector websites</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Accessibility Features */}
          <Card className="p-6">
            <h2 className="text-xl mb-4" style={{ color: colors.primary }}>Accessibility Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Visual Accessibility */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.cyan }}>
                    <Eye className="w-4 h-4" style={{ color: colors.iconColors.cyan }} />
                  </div>
                  <h3 className="font-medium" style={{ color: colors.primary }}>Visual Accessibility</h3>
                </div>
                <ul className="text-sm space-y-1 ml-11" style={{ color: colors.secondary }}>
                  <li>• High contrast color schemes</li>
                  <li>• Scalable text up to 200%</li>
                  <li>• Alternative text for images</li>
                  <li>• Clear visual focus indicators</li>
                  <li>• Consistent navigation layout</li>
                </ul>
              </div>

              {/* Motor Accessibility */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.orange }}>
                    <Hand className="w-4 h-4" style={{ color: colors.iconColors.orange }} />
                  </div>
                  <h3 className="font-medium" style={{ color: colors.primary }}>Motor Accessibility</h3>
                </div>
                <ul className="text-sm space-y-1 ml-11" style={{ color: colors.secondary }}>
                  <li>• Large click targets (44x44px minimum)</li>
                  <li>• Keyboard-only navigation support</li>
                  <li>• No time-sensitive interactions</li>
                  <li>• Drag and drop alternatives</li>
                  <li>• Hover alternatives for touch devices</li>
                </ul>
              </div>

              {/* Auditory Accessibility */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.indigo }}>
                    <Ear className="w-4 h-4" style={{ color: colors.iconColors.indigo }} />
                  </div>
                  <h3 className="font-medium" style={{ color: colors.primary }}>Auditory Accessibility</h3>
                </div>
                <ul className="text-sm space-y-1 ml-11" style={{ color: colors.secondary }}>
                  <li>• Captions for video content</li>
                  <li>• Transcripts for audio materials</li>
                  <li>• Visual alternatives to audio cues</li>
                  <li>• No auto-playing audio content</li>
                  <li>• Audio controls for multimedia</li>
                </ul>
              </div>

              {/* Cognitive Accessibility */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.emerald }}>
                    <Brain className="w-4 h-4" style={{ color: colors.iconColors.emerald }} />
                  </div>
                  <h3 className="font-medium" style={{ color: colors.primary }}>Cognitive Accessibility</h3>
                </div>
                <ul className="text-sm space-y-1 ml-11" style={{ color: colors.secondary }}>
                  <li>• Clear, simple language</li>
                  <li>• Consistent navigation patterns</li>
                  <li>• Logical content structure</li>
                  <li>• Error prevention and correction</li>
                  <li>• Progress indicators for forms</li>
                </ul>
              </div>

            </div>
          </Card>

          {/* Keyboard Navigation */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.iconBgs.orange }}>
                <Keyboard className="w-5 h-5" style={{ color: colors.iconColors.orange }} />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Keyboard Navigation Guide</h2>
                <div className="space-y-3" style={{ color: colors.secondary }}>
                  <p>Our website can be fully navigated using only a keyboard. Here are the key shortcuts:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: colors.primary }}>Navigation Keys</h4>
                      <ul className="text-sm space-y-1">
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Tab</kbd> - Move forward</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Shift + Tab</kbd> - Move backward</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> - Activate links/buttons</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Space</kbd> - Activate buttons</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium" style={{ color: colors.primary }}>Content Navigation</h4>
                      <ul className="text-sm space-y-1">
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Arrow Keys</kbd> - Navigate menus</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Esc</kbd> - Close dialogs/menus</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Home</kbd> - Go to page top</li>
                        <li><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">End</kbd> - Go to page bottom</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Screen Reader Support */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Screen Reader Compatibility</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>Our website has been tested and optimized for the following screen readers:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>JAWS</h4>
                  <p className="text-sm">Windows - Latest version</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>NVDA</h4>
                  <p className="text-sm">Windows - Free, open-source</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>VoiceOver</h4>
                  <p className="text-sm">macOS/iOS - Built-in</p>
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <h4 className="font-medium" style={{ color: colors.primary }}>Screen Reader Features:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Descriptive headings and landmarks</li>
                  <li>Meaningful link text</li>
                  <li>Table headers and captions</li>
                  <li>Form labels and error descriptions</li>
                  <li>Image alternative text</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Healthcare Professional Considerations */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Healthcare Professional Accessibility</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>Special considerations for healthcare professionals with disabilities:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Medical Information Access:</strong> Critical device information is always accessible via multiple pathways</li>
                <li><strong>Emergency Procedures:</strong> Important safety information is prominently marked and accessible</li>
                <li><strong>Professional Workflows:</strong> Designed to integrate with assistive technologies used in medical settings</li>
                <li><strong>Continuing Education:</strong> Training materials and certifications are fully accessible</li>
                <li><strong>Clinical Documentation:</strong> Forms and documentation tools support assistive technology</li>
              </ul>
            </div>
          </Card>

          {/* Browser and Technology Support */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Supported Browsers and Technologies</h2>
            <div className="space-y-4" style={{ color: colors.secondary }}>
              <div>
                <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Supported Browsers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <span>• Chrome 90+</span>
                  <span>• Firefox 88+</span>
                  <span>• Safari 14+</span>
                  <span>• Edge 90+</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Assistive Technologies</h4>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>Screen magnification software</li>
                  <li>Voice recognition software</li>
                  <li>Alternative keyboards and input devices</li>
                  <li>Switch navigation devices</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Known Limitations */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Known Limitations</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>We are continuously working to improve accessibility. Current known limitations include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Third-party content:</strong> Some embedded content may have limited accessibility features</li>
                <li><strong>Complex diagrams:</strong> Medical device diagrams may require additional description requests</li>
                <li><strong>PDF documents:</strong> Some legacy PDFs may not be fully accessible (being updated)</li>
              </ul>
              <p className="mt-3">
                We are actively working to address these limitations and welcome feedback on areas for improvement.
              </p>
            </div>
          </Card>

          {/* Accessibility Testing */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Testing and Evaluation</h2>
            <div className="space-y-3" style={{ color: colors.secondary }}>
              <p>Our accessibility compliance is maintained through:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Automated Testing</h4>
                  <ul className="text-sm space-y-1">
                    <li>• WAVE Web Accessibility Evaluator</li>
                    <li>• axe DevTools accessibility checker</li>
                    <li>• Lighthouse accessibility audits</li>
                    <li>• Regular WCAG compliance scans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2" style={{ color: colors.primary }}>Manual Testing</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Screen reader testing</li>
                    <li>• Keyboard-only navigation</li>
                    <li>• Color contrast verification</li>
                    <li>• User testing with disabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Feedback and Support */}
          <Card className="p-6">
            <h2 className="text-xl mb-3" style={{ color: colors.primary }}>Accessibility Feedback and Support</h2>
            <div className="space-y-4" style={{ color: colors.secondary }}>
              <p>
                We welcome feedback about accessibility issues or suggestions for improvement. Your input helps us 
                create a better experience for all healthcare professionals.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.blue }}>
                    <span className="text-sm font-medium">📧</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Email</h4>
                    <p className="text-sm">accessibility@neuroflowdynamics.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.emerald }}>
                    <span className="text-sm font-medium">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Phone</h4>
                    <p className="text-sm">+91-88502 70047 (Option 5 for Accessibility)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.iconBgs.orange }}>
                    <span className="text-sm font-medium">⏱️</span>
                  </div>
                  <div>
                    <h4 className="font-medium" style={{ color: colors.primary }}>Response Time</h4>
                    <p className="text-sm">We aim to respond within 2 business days</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm" style={{ color: '#1e40af' }}>
                  <strong>Alternative Access:</strong> If you encounter barriers accessing our content, 
                  please contact us for alternative formats or assistance accessing the information you need.
                </p>
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

AccessibilityPage.displayName = 'AccessibilityPage';

export default AccessibilityPage;