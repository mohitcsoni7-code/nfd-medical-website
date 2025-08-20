import { memo, useState } from 'react';
import { Separator } from './ui/separator';
import { Mail, Phone, MapPin, Palette, ChevronDown, CheckCircle, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { colorSchemes } from './ColorSchemes';
import { getAllProducts } from '../data/productsData';
const nfdLogo = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">NFD Logo</text></svg>');

interface FooterProps {
  colors: any;
  onNavigate: (sectionId: string) => void;
  currentScheme?: string;
  onSchemeChange?: (scheme: string) => void;
  goToProduct?: (productId: string) => void;
  goToTermsOfUse?: () => void;
  goToPrivacyPolicy?: () => void;
  goToCookiePolicy?: () => void;
  goToGDPRCompliance?: () => void;
  goToAccessibility?: () => void;
}

const Footer = memo(({ colors, onNavigate, currentScheme = 'nfdmedical', onSchemeChange, goToProduct, goToTermsOfUse, goToPrivacyPolicy, goToCookiePolicy, goToGDPRCompliance, goToAccessibility }: FooterProps) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const products = getAllProducts();

  const handleSchemeSelect = (scheme: string) => {
    if (onSchemeChange) {
      onSchemeChange(scheme);
    }
    setIsThemeOpen(false);
  };

  return (
    <footer 
      className="text-gray-300 py-6 sm:py-8 lg:py-12" 
      style={{ backgroundColor: colors.footerBg }}
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organization Schema */}
        <div className="hidden" itemScope itemType="https://schema.org/MedicalOrganization">
          <meta itemProp="name" content="NFD - Neuro Flow Dynamics" />
          <meta itemProp="description" content="Leading manufacturer of neurovascular medical devices" />
          <meta itemProp="url" content="https://nfd-medical.com" />
          <meta itemProp="telephone" content="+91-88502-70047" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content="Mumbai" />
            <meta itemProp="addressCountry" content="IN" />
          </div>
        </div>
        
        {/* Brand Section - Reduced spacing on mobile */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex items-center">
            <img 
              src={nfdLogo} 
              alt="NFD - Neuro Flow Dynamics logo - Leading neurovascular medical device manufacturer" 
              className="h-12 sm:h-16 w-auto object-contain filter brightness-0 invert"
              width={120}
              height={48}
              itemProp="logo"
            />
          </div>
        </div>



        {/* Main Content - Better desktop alignment */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* All Footer Sections - 2x2 on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Company</h3>
              <div className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => onNavigate('about')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  About Us
                </button>
                <button 
                  onClick={() => onNavigate('mission')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Our Mission
                </button>
                <button 
                  onClick={() => onNavigate('expertise')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Our Expertise
                </button>
                <button 
                  onClick={() => onNavigate('why-choose')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Why Choose NFD
                </button>
                <a href="#" className="block hover:text-white transition-colors text-xs sm:text-sm lg:text-base cursor-pointer" style={{ color: '#cbd5e1' }}>
                  Careers
                </a>
              </div>
            </div>
            
            {/* Products Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Products</h3>
              <div className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => onNavigate('products')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  All Products
                </button>
                {/* HELIOS TEMPORARILY HIDDEN */}
                {/* <button 
                  onClick={() => goToProduct?.('helios')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  HELIOS™ Thrombectomy Device
                </button> */}
                <button 
                  onClick={() => goToProduct?.('polaris-aspiration')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Polaris Aspiration Catheter
                </button>
                <button 
                  onClick={() => goToProduct?.('terra-coil')} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Terra Embolization Coils
                </button>
              </div>
            </div>

            {/* Contact Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Contact</h3>
              <div className="space-y-2 sm:space-y-4">
                
                {/* Phone */}
                <div className="flex items-start space-x-1 sm:space-x-3 justify-center sm:justify-start">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                  <div className="text-center sm:text-left">
                    <p className="text-white text-xs sm:text-sm lg:text-base">Call Us</p>
                    <a 
                      href="tel:+918850270047" 
                      className="text-xs sm:text-sm lg:text-base hover:text-white transition-colors cursor-pointer"
                      style={{ color: '#cbd5e1' }}
                      aria-label="Call NFD at +91-88502 70047"
                    >
                      +91-88502 70047
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-1 sm:space-x-3 justify-center sm:justify-start">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0 mt-0.5" style={{ color: colors.accent }} />
                  <div className="text-center sm:text-left">
                    <p className="text-white text-xs sm:text-sm lg:text-base">Location</p>
                    <a 
                      href="https://share.google/fNiVe9HY0ENWLzeG6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm lg:text-base hover:text-white transition-colors cursor-pointer"
                      style={{ color: '#cbd5e1' }}
                      aria-label="View NFD location in Mumbai, India on Google Maps"
                    >
                      Mumbai, India
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-white mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">Legal</h3>
              <div className="space-y-2 sm:space-y-3">
                <button 
                  onClick={() => goToTermsOfUse?.()} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Terms of Use
                </button>
                <button 
                  onClick={() => goToPrivacyPolicy?.()} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => goToCookiePolicy?.()} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Cookie Policy
                </button>
                <button 
                  onClick={() => goToGDPRCompliance?.()} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  GDPR Compliance
                </button>
                <button 
                  onClick={() => goToAccessibility?.()} 
                  className="block hover:text-white transition-colors w-full sm:w-auto sm:text-left text-xs sm:text-sm lg:text-base cursor-pointer" 
                  style={{ color: '#cbd5e1' }}
                >
                  Accessibility
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-white mb-4 text-sm sm:text-base lg:text-lg">Follow Us</h3>
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/neuro-flow-dynamics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110"
                  aria-label="Follow NFD on LinkedIn"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@neuroflowdynamics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110"
                  aria-label="Follow NFD on YouTube"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                    <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/neuroflowdynamics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110"
                  aria-label="Follow NFD on Instagram"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:border-transparent transition-all duration-300">
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/neuroflowdynamics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300 hover:scale-110"
                  aria-label="Follow NFD on Facebook"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                    <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-6 sm:my-8" style={{ backgroundColor: '#334155' }} />

          {/* Theme Selector Section - Mobile optimized */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <Button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                variant="outline"
                size="sm"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white text-xs sm:text-sm"
              >
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Choose Theme
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isThemeOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3 min-w-[240px] sm:min-w-[280px] max-h-[300px] sm:max-h-[350px] overflow-y-auto z-50">
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 mb-2 text-center">Choose your preferred theme:</p>
                    <div className="grid grid-cols-1 gap-1 sm:gap-2">
                      {Object.entries(colorSchemes).map(([key, scheme]) => (
                        <button
                          key={key}
                          onClick={() => handleSchemeSelect(key)}
                          className={`w-full flex items-center space-x-2 sm:space-x-3 p-2 rounded-lg border-2 transition-all hover:shadow-md cursor-pointer ${
                            currentScheme === key 
                              ? 'border-blue-300 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div 
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                            style={{ background: scheme.preview }}
                          />
                          <div className="flex-1 text-left">
                            <div className="text-xs text-gray-900">{scheme.name}</div>
                          </div>
                          {currentScheme === key && (
                            <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="text-center pt-2 sm:pt-4">
            <div className="text-xs sm:text-sm" style={{ color: '#94a3b8' }}>
              © 2025 Neuro Flow Dynamics. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;