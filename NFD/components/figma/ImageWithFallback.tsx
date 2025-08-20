import { useState, useCallback, memo } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const ImageWithFallback = memo(({ 
  src, 
  alt, 
  fallback, 
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  ...props 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Generate optimized alt text if basic alt is provided
  const optimizeAltText = useCallback((baseAlt: string) => {
    // If alt already seems optimized (contains keywords), return as-is
    if (baseAlt.toLowerCase().includes('medical') || 
        baseAlt.toLowerCase().includes('device') || 
        baseAlt.toLowerCase().includes('neuro')) {
      return baseAlt;
    }
    
    // Add context for better SEO
    if (baseAlt.toLowerCase().includes('product') || baseAlt.toLowerCase().includes('equipment')) {
      return `${baseAlt} - NFD Neurovascular Medical Device`;
    }
    
    if (baseAlt.toLowerCase().includes('team') || baseAlt.toLowerCase().includes('professional')) {
      return `${baseAlt} - NFD Medical Experts and Healthcare Professionals`;
    }
    
    if (baseAlt.toLowerCase().includes('technology') || baseAlt.toLowerCase().includes('innovation')) {
      return `${baseAlt} - Advanced Medical Technology by NFD`;
    }
    
    return baseAlt;
  }, []);

  const handleError = useCallback(() => {
    if (!hasError) {
      setHasError(true);
      if (fallback) {
        setImgSrc(fallback);
      } else {
        // Use a medical-themed fallback based on alt text
        if (alt.toLowerCase().includes('product') || alt.toLowerCase().includes('device')) {
          setImgSrc('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&q=80');
        } else if (alt.toLowerCase().includes('team') || alt.toLowerCase().includes('professional')) {
          setImgSrc('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&q=80');
        } else {
          setImgSrc('https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop&q=80');
        }
      }
    }
  }, [fallback, alt, hasError]);

  const handleLoad = useCallback(() => {
    setHasError(false);
  }, []);

  // Optimize the alt text
  const optimizedAlt = optimizeAltText(alt);

  // Generate srcset for responsive images
  const generateSrcSet = useCallback((baseSrc: string) => {
    if (!baseSrc.includes('unsplash.com')) return undefined;
    
    const baseUrl = baseSrc.split('?')[0];
    const params = new URLSearchParams(baseSrc.split('?')[1] || '');
    
    // Generate different sizes for responsive loading
    const sizes = [400, 600, 800, 1200];
    return sizes.map(size => {
      const newParams = new URLSearchParams(params);
      newParams.set('w', size.toString());
      newParams.set('q', '80');
      return `${baseUrl}?${newParams.toString()} ${size}w`;
    }).join(', ');
  }, []);

  const srcSet = generateSrcSet(src);

  return (
    <img
      src={imgSrc}
      alt={optimizedAlt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
      loading={priority ? 'eager' : loading}
      width={width}
      height={height}
      srcSet={srcSet}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      {...props}
      // SEO and accessibility attributes
      itemProp="image"
      role="img"
      aria-describedby={props['aria-describedby']}
    />
  );
});

ImageWithFallback.displayName = 'ImageWithFallback';

export { ImageWithFallback };