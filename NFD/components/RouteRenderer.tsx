import { memo, lazy, Suspense } from 'react';
import { HeroSection } from './HeroSection';
import ProductsSection from './ProductsSection';
import AboutSection from './AboutSection';
import WhyChooseSection from './WhyChooseSection';
import ExpertiseSection from './ExpertiseSection';
import MissionSection from './MissionSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

// Lazy load pages for better performance
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('../pages/ProductDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'));

// Lazy load legal pages
const TermsOfUsePage = lazy(() => import('../pages/TermsOfUsePage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const CookiePolicyPage = lazy(() => import('../pages/CookiePolicyPage'));
const GDPRCompliancePage = lazy(() => import('../pages/GDPRCompliancePage'));
const AccessibilityPage = lazy(() => import('../pages/AccessibilityPage'));

interface RouteRendererProps {
  currentRoute: string;
  currentProduct: any;
  colors: any;
  scrollToSection: (sectionId: string) => void;
  handleProductClick: (productId: string) => void;
  handleFormSubmit: () => void;
  handleContactUsFromProduct: () => void;
  currentScheme: string;
  handleSchemeChange: (scheme: string) => void;
  goHome: () => void;
  goToProducts: () => void;
  goToContact: () => void;
  goToThankYou: () => void;
  goToTermsOfUse: () => void;
  goToPrivacyPolicy: () => void;
  goToCookiePolicy: () => void;
  goToGDPRCompliance: () => void;
  goToAccessibility: () => void;
}

const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
));

export const RouteRenderer = memo(({
  currentRoute,
  currentProduct,
  colors,
  scrollToSection,
  handleProductClick,
  handleFormSubmit,
  handleContactUsFromProduct,
  currentScheme,
  handleSchemeChange,
  goHome,
  goToProducts,
  goToContact,
  goToThankYou,
  goToTermsOfUse,
  goToPrivacyPolicy,
  goToCookiePolicy,
  goToGDPRCompliance,
  goToAccessibility
}: RouteRendererProps) => {

  if (currentRoute === 'home') {
    return (
      <main role="main">
        <section id="hero" aria-labelledby="hero-heading">
          <HeroSection colors={colors} onNavigate={scrollToSection} onProductClick={handleProductClick} onProductsPage={goToProducts} />
        </section>
        <section id="products">
          <ProductsSection colors={colors} onProductClick={handleProductClick} onContactUs={goToContact} />
        </section>
        <section id="about">
          <AboutSection colors={colors} />
        </section>
        <section id="why-choose">
          <WhyChooseSection colors={colors} />
        </section>
        <section id="expertise">
          <ExpertiseSection colors={colors} />
        </section>
        <section id="mission">
          <MissionSection colors={colors} />
        </section>
        <section id="contact">
          <ContactSection colors={colors} onNavigate={scrollToSection} onFormSubmit={handleFormSubmit} />
        </section>
        <section id="footer">
          <Footer 
            colors={colors} 
            onNavigate={scrollToSection} 
            currentScheme={currentScheme} 
            onSchemeChange={handleSchemeChange}
            goToProduct={handleProductClick}
            goToTermsOfUse={goToTermsOfUse}
            goToPrivacyPolicy={goToPrivacyPolicy}
            goToCookiePolicy={goToCookiePolicy}
            goToGDPRCompliance={goToGDPRCompliance}
            goToAccessibility={goToAccessibility}
          />
        </section>
      </main>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <main role="main">
        {currentRoute === 'products' && (
          <ProductsPage colors={colors} onBack={goHome} onProductClick={handleProductClick} />
        )}

        {currentRoute === 'product' && currentProduct && (
          <ProductDetailPage 
            product={currentProduct}
            colors={colors}
            onBack={goHome}
            onContactUs={handleContactUsFromProduct}
          />
        )}

        {currentRoute === 'product' && !currentProduct && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4" role="alert">
              <h1 className="text-2xl" style={{ color: colors.primary }}>Product Not Found</h1>
              <p style={{ color: colors.secondary }}>The requested product could not be found.</p>
              <button 
                onClick={goHome}
                className="px-4 py-2 rounded"
                style={{ backgroundColor: colors.accent, color: 'white' }}
                aria-label="Return to homepage"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}

        {currentRoute === 'contact' && (
          <ContactPage colors={colors} onBack={goHome} onFormSubmit={handleFormSubmit} goToThankYou={goToThankYou} />
        )}

        {currentRoute === 'thank-you' && (
          <ThankYouPage colors={colors} onBack={goToContact} onGoHome={goHome} />
        )}

        {/* Legal Pages */}
        {currentRoute === 'terms-of-use' && (
          <TermsOfUsePage colors={colors} onBack={goHome} />
        )}

        {currentRoute === 'privacy-policy' && (
          <PrivacyPolicyPage colors={colors} onBack={goHome} />
        )}

        {currentRoute === 'cookie-policy' && (
          <CookiePolicyPage colors={colors} onBack={goHome} />
        )}

        {currentRoute === 'gdpr-compliance' && (
          <GDPRCompliancePage colors={colors} onBack={goHome} />
        )}

        {currentRoute === 'accessibility' && (
          <AccessibilityPage colors={colors} onBack={goHome} />
        )}
      </main>
    </Suspense>
  );
});

RouteRenderer.displayName = 'RouteRenderer';