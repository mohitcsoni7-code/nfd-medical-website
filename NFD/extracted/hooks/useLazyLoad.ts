import { useState, useEffect, useRef, useCallback } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  fallbackDelay?: number;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px',
    triggerOnce = true,
    fallbackDelay = 3000
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && (!triggerOnce || !hasLoaded)) {
      setIsIntersecting(true);
      setHasLoaded(true);
      
      // Clear fallback timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [hasLoaded, triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback timeout for slow connections
    timeoutRef.current = setTimeout(() => {
      if (!hasLoaded) {
        setIsIntersecting(true);
        setHasLoaded(true);
      }
    }, fallbackDelay);

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin
      });

      observer.observe(element);

      return () => {
        observer.disconnect();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsIntersecting(true);
      setHasLoaded(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, hasLoaded, handleIntersection, fallbackDelay]);

  const retry = useCallback(() => {
    setError(false);
    setHasLoaded(false);
    setIsIntersecting(false);
  }, []);

  return {
    ref,
    isIntersecting,
    hasLoaded,
    error,
    retry
  };
};

// Advanced image lazy loading hook with progressive loading
export const useImageLazyLoad = (src: string, placeholder?: string) => {
  const [imageSrc, setImageSrc] = useState(placeholder || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { ref, isIntersecting } = useLazyLoad({
    threshold: 0.01,
    rootMargin: '100px 0px'
  });

  useEffect(() => {
    if (isIntersecting && src && !isLoaded) {
      setIsLoading(true);
      
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
        setIsLoading(false);
        setError(false);
      };
      
      img.onerror = () => {
        setError(true);
        setIsLoading(false);
      };
      
      img.src = src;
    }
  }, [isIntersecting, src, isLoaded]);

  const retry = useCallback(() => {
    setError(false);
    setIsLoaded(false);
    setIsLoading(false);
  }, []);

  return {
    ref,
    src: imageSrc,
    isLoaded,
    isLoading,
    error,
    retry
  };
};

// Component lazy loading hook with preloading
export const useComponentLazyLoad = <T>(
  importFunc: () => Promise<{ default: T }>,
  options: UseLazyLoadOptions = {}
) => {
  const [Component, setComponent] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { ref, isIntersecting } = useLazyLoad(options);

  useEffect(() => {
    if (isIntersecting && !Component && !loading) {
      setLoading(true);
      
      importFunc()
        .then(module => {
          setComponent(module.default);
          setError(null);
        })
        .catch(err => {
          setError(err);
          console.warn('Failed to load component:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isIntersecting, Component, loading, importFunc]);

  const preload = useCallback(() => {
    if (!Component && !loading) {
      setLoading(true);
      importFunc()
        .then(module => {
          setComponent(module.default);
          setError(null);
        })
        .catch(err => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [Component, loading, importFunc]);

  return {
    ref,
    Component,
    loading,
    error,
    preload
  };
};