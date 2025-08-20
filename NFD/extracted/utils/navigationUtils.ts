export const createScrollToSection = (
  currentRoute: string,
  setIsMenuOpen: (open: boolean) => void,
  goHome: () => void,
  goToProducts: () => void,
  goToContact: () => void
) => {
  return (sectionId: string) => {
    // Special handling for products section
    if (sectionId === 'products') {
      goToProducts();
      setIsMenuOpen(false);
      return;
    }

    // Special handling for contact section
    if (sectionId === 'contact') {
      goToContact();
      setIsMenuOpen(false);
      return;
    }

    // Helper function to get dynamic header height
    const getHeaderOffset = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        const navHeight = nav.offsetHeight;
        // Add extra padding to ensure heading is clearly visible
        return navHeight + 20;
      }
      // Fallback to increased static value if nav not found
      return 100;
    };

    // If we're not on home page, navigate home first
    if (currentRoute !== 'home') {
      goHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = getHeaderOffset();
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
            behavior: 'smooth'
          });
          

        }
        setIsMenuOpen(false);
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = getHeaderOffset();
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
        

        setIsMenuOpen(false);
      }
    }
  };
};

// Component cache to avoid duplicate imports
const componentCache = new Map<string, Promise<any>>();

export const preloadCriticalComponents = () => {
  // Completely disable in all potentially problematic environments
  if (typeof window !== 'undefined') {
    const isPreview = window.parent !== window || 
                     window.location.hostname.includes('figma') ||
                     window.location.hostname.includes('localhost') ||
                     window.location.hostname.includes('preview') ||
                     window.location.protocol === 'file:';
    if (isPreview) {
      return; // Do absolutely nothing
    }
  }

  // Only run in production-like environments
  try {
    const criticalComponents = [
      { key: 'ProductsPage', import: () => import('../pages/ProductsPage') },
      { key: 'ContactPage', import: () => import('../pages/ContactPage') }
    ]; // Reduced component list

    // Extra delayed and minimal preloading
    setTimeout(() => {
      try {
        criticalComponents.forEach(({ key, import: importFunc }) => {
          if (!componentCache.has(key)) {
            const promise = importFunc().catch(() => null);
            componentCache.set(key, promise);
          }
        });
      } catch (e) {
        // Complete silence
      }
    }, 8000); // Very delayed
  } catch (e) {
    // Complete silence
  }
};

// Intelligent preloading based on user behavior
export const preloadNextLikelyPages = (currentRoute: string) => {
  const preloadMap: Record<string, string[]> = {
    'home': ['ProductsPage', 'ContactPage'],
    'products': ['ProductDetailPage', 'ContactPage'],
    'product': ['ContactPage', 'ProductsPage'],
    'contact': ['ProductsPage']
  };

  const pagesToPreload = preloadMap[currentRoute] || [];
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      pagesToPreload.forEach(page => {
        if (!componentCache.has(page)) {
          let importPromise: Promise<any>;
          
          switch (page) {
            case 'ProductsPage':
              importPromise = import('../pages/ProductsPage');
              break;
            case 'ContactPage':
              importPromise = import('../pages/ContactPage');
              break;
            case 'ProductDetailPage':
              importPromise = import('../pages/ProductDetailPage');
              break;
            default:
              return;
          }
          
          componentCache.set(page, importPromise.catch(err => {
            console.warn(`Failed to preload ${page}:`, err);
            return null;
          }));
        }
      });
    }, { timeout: 3000 });
  }
};