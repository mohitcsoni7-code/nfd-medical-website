import { useEffect, memo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

// Minimal performance utilities - no monitoring in preview environments
class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTimer(name: string): void {
    // Skip in preview environments completely
    const isPreview = typeof window !== 'undefined' && 
                     (window.parent !== window || window.location.hostname.includes('figma'));
    if (!isPreview) {
      this.metrics.set(name, performance.now());
    }
  }

  endTimer(name: string): number {
    // Skip in preview environments completely
    const isPreview = typeof window !== 'undefined' && 
                     (window.parent !== window || window.location.hostname.includes('figma'));
    if (isPreview) return 0;
    
    const start = this.metrics.get(name);
    if (start) {
      const duration = performance.now() - start;
      this.metrics.delete(name);
      return duration;
    }
    return 0;
  }

  // Completely remove all performance monitoring
  measureWebVitals(): void {
    // No monitoring at all - this was causing the Long Task warnings
    return;
  }
}

// Resource preloader
const preloadCriticalResources = () => {
  const resources = [
    // Critical fonts
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2' },
    
    // Critical images
            { href: 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">NFD Logo</text></svg>'), as: 'image' },
  ];

  resources.forEach(({ href, as, type }) => {
    try {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (as === 'font') link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    } catch (error) {
      console.warn('Failed to preload resource:', href);
    }
  });
};

// DNS prefetch for external resources
const prefetchDNS = () => {
  const domains = [
    'https://images.unsplash.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  domains.forEach(domain => {
    try {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    } catch (error) {
      console.warn('Failed to prefetch DNS for:', domain);
    }
  });
};

// Cache API fallback for environments that don't support Service Workers
const setupCacheApiFallback = () => {
  if ('caches' in window) {
    const CACHE_NAME = 'nfd-fallback-v1';
    
    // Pre-cache critical resources quietly
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll([
        '/',
        '/styles/globals.css'
      ]).catch(() => {
        // Silent failure - cache isn't critical
      });
    }).catch(() => {
      // Silent failure
    });
    
    // Only log in non-preview environments
    const isPreview = window.parent !== window || window.location.hostname.includes('figma');
    if (!isPreview && process.env.NODE_ENV === 'development') {
      console.log('🔧 Cache API fallback initialized');
    }
  }
};

// Service Worker registration with environment detection
const registerServiceWorker = () => {
  const isPreview = window.parent !== window || window.location.hostname.includes('figma');
  
  // Skip Service Worker in iframe environments (like Figma preview)
  if (isPreview) {
    setupCacheApiFallback();
    return;
  }

  if ('serviceWorker' in navigator && 'caches' in window) {
    // Try multiple approaches
    const registerWithFallback = async () => {
      try {
        // First, try to register a traditional service worker file
        await navigator.serviceWorker.register('/sw.js');
        if (process.env.NODE_ENV === 'development') {
          console.log('🔧 Service Worker registered successfully');
        }
      } catch (firstError) {
        // Just use Cache API fallback - avoid complex blob/data URL issues
        setupCacheApiFallback();
      }
    };

    registerWithFallback();
  } else {
    setupCacheApiFallback();
  }
};

// Advanced image optimization
const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          
          // Add loading state
          img.style.filter = 'blur(5px)';
          img.style.transition = 'filter 0.3s ease';
          
          // Load high-res image
          const tempImg = new Image();
          tempImg.onload = () => {
            img.src = tempImg.src;
            img.style.filter = 'none';
          };
          
          const src = img.dataset.src || img.src;
          if (src) {
            tempImg.src = src;
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.01
    });

    images.forEach(img => {
      // Skip if already loaded
      if (!img.complete) {
        imageObserver.observe(img);
      }
    });
  }
};

// Connection-based optimizations
const optimizeForConnection = () => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      const { effectiveType, downlink } = connection;
      
      // Adjust strategies based on connection
      if (effectiveType === 'slow-2g' || downlink < 0.5) {
        document.documentElement.classList.add('slow-connection');
        // Disable non-critical animations
        document.documentElement.style.setProperty('--animation-duration', '0s');
      } else if (effectiveType === '4g' || downlink > 2) {
        document.documentElement.classList.add('fast-connection');
        // Enable enhanced features
        preloadNextPages();
      }
    }
  }
};

// Preload likely next pages
const preloadNextPages = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Preload critical pages
      Promise.all([
        import('../pages/ProductsPage'),
        import('../pages/ContactPage'),
        import('../pages/ProductDetailPage')
      ]).catch(err => console.warn('Failed to preload pages:', err));
    }, { timeout: 5000 });
  }
};

// Memory optimization
const setupMemoryOptimization = () => {
  const cleanup = () => {
    // Clear performance marks and measures
    if ('performance' in window) {
      performance.clearMarks?.();
      performance.clearMeasures?.();
    }
    
    // Clear any timers or intervals
    document.querySelectorAll('[data-timer-id]').forEach(el => {
      const timerId = el.getAttribute('data-timer-id');
      if (timerId) {
        clearTimeout(parseInt(timerId));
        clearInterval(parseInt(timerId));
      }
    });
  };

  window.addEventListener('beforeunload', cleanup);
  
  // Periodic cleanup for long-running sessions
  const periodicCleanup = setInterval(() => {
    if (document.hidden) {
      cleanup();
    }
  }, 5 * 60 * 1000); // 5 minutes

  return () => {
    cleanup();
    clearInterval(periodicCleanup);
  };
};



const PerformanceOptimizer = memo(({ children }: PerformanceOptimizerProps) => {
  useEffect(() => {
    const isPreviewEnvironment = window.parent !== window || 
                                 window.location.hostname.includes('figma') ||
                                 window.location.hostname.includes('localhost');
    
    // In preview environments, do absolutely minimal optimizations
    if (isPreviewEnvironment) {
      // Only basic DNS prefetch - nothing that could trigger performance monitoring
      const prefetchBasic = () => {
        try {
          const link = document.createElement('link');
          link.rel = 'dns-prefetch';
          link.href = 'https://images.unsplash.com';
          document.head.appendChild(link);
        } catch (error) {
          // Silent failure
        }
      };
      
      setTimeout(prefetchBasic, 1000);
      return;
    }
    
    // Full optimizations only in production
    const initOptimizations = async () => {
      try {
        // Use requestIdleCallback for non-blocking initialization
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            prefetchDNS();
            preloadCriticalResources();
            registerServiceWorker();
            optimizeForConnection();
          }, { timeout: 5000 });
        } else {
          setTimeout(() => {
            prefetchDNS();
            preloadCriticalResources();
            registerServiceWorker();
            optimizeForConnection();
          }, 100);
        }
        
        const cleanup = setupMemoryOptimization();
        
        setTimeout(() => {
          optimizeImages();
        }, 2000);
        
        setTimeout(() => {
          preloadNextPages();
        }, 8000);
        
        return cleanup;
      } catch (error) {
        return () => {};
      }
    };

    let cleanup: (() => void) | undefined;
    initOptimizations().then(cleanupFn => {
      cleanup = cleanupFn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export { PerformanceOptimizer };
export default PerformanceOptimizer;