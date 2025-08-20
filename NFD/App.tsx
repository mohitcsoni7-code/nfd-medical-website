// IMMEDIATE PERFORMANCE SUPPRESSION - Must be first
import './utils/performanceSuppressionUtils';

import { useState, useEffect, Suspense, memo } from 'react';
import { colorSchemes } from './components/ColorSchemes';
import { Navigation } from './components/Navigation';
import { RouteRenderer } from './components/RouteRenderer';
import { useRouter } from './hooks/useRouter';
import { getProductById } from './data/productsData';
import SEO from './components/SEO';
import Sitemap from './components/Sitemap';
import { generateSEOData } from './utils/seoUtils';
import { createScrollToSection, preloadCriticalComponents } from './utils/navigationUtils';
import { createHandlers } from './utils/handlerUtils';

// Performance-optimized loading indicator
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
));
LoadingSpinner.displayName = 'LoadingSpinner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentScheme, setCurrentScheme] = useState('nfdmedical');
  
  // Detect preview environment to disable performance-heavy features
  const isPreviewEnvironment = typeof window !== 'undefined' && 
                              (window.parent !== window || 
                               window.location.hostname.includes('figma') ||
                               window.location.hostname.includes('localhost'));

  const { 
    currentRoute, 
    params, 
    goHome, 
    goToProducts, 
    goToProduct, 
    goToContact, 
    goToThankYou,
    goToTermsOfUse,
    goToPrivacyPolicy,
    goToCookiePolicy,
    goToGDPRCompliance,
    goToAccessibility
  } = useRouter();
  
  // Get current color scheme and product
  const colors = colorSchemes[currentScheme as keyof typeof colorSchemes].colors;
  const currentProduct = currentRoute === 'product' && params?.id ? getProductById(params.id) : null;
  
  // Generate SEO data
  const seoData = generateSEOData(currentRoute, params);
  
  // Create handlers
  const {
    handleMenuToggle,
    handleSchemeChange,
    handleProductClick,
    handleContactUsFromProduct,
    handleFormSubmit
  } = createHandlers(setIsMenuOpen, setCurrentScheme, goToProduct, goToContact, goToThankYou);
  
  // Create scroll to section handler
  const scrollToSection = createScrollToSection(
    currentRoute,
    setIsMenuOpen,
    goHome,
    goToProducts,
    goToContact
  );

  // Minimal app setup - completely silent in preview
  useEffect(() => {
    // Update document title silently
    try {
      document.title = seoData.title;
    } catch (e) {
      // Silent failure
    }
    
    // Absolutely nothing else in preview environments
    if (isPreviewEnvironment) {
      return;
    }
    
    // Production-only delayed operations
    const timer = setTimeout(() => {
      try {
        preloadCriticalComponents();
      } catch (e) {
        // Silent failure
      }
    }, 10000); // Extra delayed
    
    return () => clearTimeout(timer);
  }, [seoData.title, isPreviewEnvironment]);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO & Performance Optimizations */}
      <SEO {...seoData} />
      <Sitemap />

      {/* Accessibility: Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation 
        colors={colors}
        isMenuOpen={isMenuOpen}
        onMenuToggle={handleMenuToggle}
        onNavigate={scrollToSection}
      />

      {/* Main Content with Suspense for code splitting */}
      <div id="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <RouteRenderer
            currentRoute={currentRoute}
            currentProduct={currentProduct}
            colors={colors}
            scrollToSection={scrollToSection}
            handleProductClick={handleProductClick}
            handleFormSubmit={handleFormSubmit}
            handleContactUsFromProduct={handleContactUsFromProduct}
            currentScheme={currentScheme}
            handleSchemeChange={handleSchemeChange}
            goHome={goHome}
            goToProducts={goToProducts}
            goToContact={goToContact}
            goToTermsOfUse={goToTermsOfUse}
            goToPrivacyPolicy={goToPrivacyPolicy}
            goToCookiePolicy={goToCookiePolicy}
            goToGDPRCompliance={goToGDPRCompliance}
            goToAccessibility={goToAccessibility}
          />
        </Suspense>
      </div>
    </div>
  );
}

export default App;