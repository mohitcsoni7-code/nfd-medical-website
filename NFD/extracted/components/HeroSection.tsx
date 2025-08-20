import { memo, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductCategories } from '../data/productsData';

interface HeroSectionProps {
  colors: any;
  onNavigate: (sectionId: string) => void;
  onProductClick: (productId: string) => void;
  onProductsPage?: () => void;
}

export const HeroSection = memo(({ colors, onNavigate, onProductClick, onProductsPage }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload critical sections when hero loads
  useEffect(() => {
    // Start preloading next likely sections immediately
    const preloadTimer = setTimeout(() => {
      import('./WhyChooseSection');
      import('./ExpertiseSection'); 
      import('./MissionSection');
      import('./ContactSection');
    }, 1000);
    
    return () => clearTimeout(preloadTimer);
  }, []);
  
  // Get key products from each category for featured hero slider
  const productCategories = getProductCategories();
  
  // Select all 6 available products for hero slider
  const featuredProducts = [
    // HELIOS TEMPORARILY HIDDEN - Would be flagship thrombectomy device
    // productCategories.find(cat => cat.id === 'acute-stroke')?.products.find(p => p.id === 'helios'),
    // Polaris Aspiration - Key acute stroke solution
    productCategories.find(cat => cat.id === 'acute-stroke')?.products.find(p => p.id === 'polaris-aspiration'),
    // POLARIS Micro Catheter (Acute) - Universal precision device
    productCategories.find(cat => cat.id === 'acute-stroke')?.products.find(p => p.id === 'polaris-micro-acute'),
    // Terra Coil System - Premier embolization solution
    productCategories.find(cat => cat.id === 'hemorrhagic-stroke')?.products.find(p => p.id === 'terra-coil'),
    // Polaris Distal Access - Advanced navigation
    productCategories.find(cat => cat.id === 'hemorrhagic-stroke')?.products.find(p => p.id === 'polaris-distal-access'),
    // Polaris Support Catheter - Support system
    productCategories.find(cat => cat.id === 'hemorrhagic-stroke')?.products.find(p => p.id === 'polaris-support'),
    // POLARIS Micro Catheter (Hemorrhagic) - Embolization precision
    productCategories.find(cat => cat.id === 'hemorrhagic-stroke')?.products.find(p => p.id === 'polaris-micro-hemorrhagic'),
  ].filter(Boolean); // Remove any undefined products
  
  // Create enhanced hero slides from featured product data
  const heroSlides = featuredProducts.map(product => {
    const clinicalStats = product?.clinicalData?.stats || [];
    const primaryStat = clinicalStats[0];
    const certifications = product?.certifications || [];
    
    return {
      title: product?.name || '',
      subtitle: product?.tagline?.split(' / ')[0] || product?.tagline || '',
      enhancedSubtitle: product?.tagline?.split(' / ')[1] || '',
      description: product?.fullDescription || product?.shortDescription || '',
      image: product?.image || '',
      category: product?.category || '',

      features: [
        product?.category || 'Medical Device',
        certifications.includes('Make in India Certified') ? 'Make in India Certified' : 'Quality Assured',
        certifications.includes('CE Marked') ? 'CE Marked' : 'Clinical Excellence',
        'Proven Performance'
      ],
      productId: product?.id
    };
  });

  // Auto-rotate slider every 6 seconds (longer duration for better reading)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  if (heroSlides.length === 0) {
    return (
      <section className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl md:text-6xl mb-4">NFD</h1>
          <p className="text-xl">Neuro Flow Dynamics</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative h-[70vh] overflow-hidden"
      itemScope
      itemType="https://schema.org/WebPageElement"
      aria-label="Hero section with featured medical devices"
    >
      {heroSlides.map((slide, index) => (
        <article
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${ 
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          itemScope
          itemType="https://schema.org/MedicalDevice"
          aria-hidden={index !== currentSlide}
        >
          <div className="relative h-full">
            <ImageWithFallback
              src={slide.image}
              alt={`${slide.title} - Advanced neurovascular medical device by NFD for ${slide.category.toLowerCase()} treatment`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
              width={1200}
              height={800}
            />
            <div className="absolute inset-0" style={{ background: colors.heroGradient }} />
            
            {/* Enhanced Text Overlay with Cosmic Branding */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-screen-2xl mx-auto w-full">
                <div className="px-16 sm:px-20 md:px-24 lg:px-8 max-w-2xl lg:max-w-4xl text-white space-y-4 sm:space-y-6">
                  
                  {/* Product Category */}
                  <div className="text-sm sm:text-base uppercase tracking-wider opacity-90" style={{ color: colors.accent + 'dd' }}>
                    {slide.category}
                  </div>
                  
                  {/* Main Title */}
                  <h1 
                    id="hero-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                    itemProp="headline"
                  >
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle with Cosmic Enhancement */}
                  <div className="space-y-2">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl" style={{ color: colors.accent + 'ee' }}>
                      {slide.subtitle}
                    </h2>
                    {slide.enhancedSubtitle && (
                      <h3 className="text-base sm:text-lg md:text-xl italic opacity-90" style={{ color: colors.accent + 'cc' }}>
                        {slide.enhancedSubtitle}
                      </h3>
                    )}
                  </div>
                  
                  {/* Enhanced Description */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl line-clamp-3">
                    {slide.description}
                  </p>
                  
                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {slide.features.slice(0, 4).map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-white/15 text-white border-white/30 text-xs sm:text-sm backdrop-blur-sm hover:bg-white/25 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      size="lg" 
                      onClick={() => onProductsPage ? onProductsPage() : onNavigate('products')}
                      className="text-white text-sm sm:text-base font-medium group transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: colors.accent, 
                        borderColor: colors.accent,
                        boxShadow: `0 4px 20px ${colors.accent}40`
                      }}
                    >
                      View All Our Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      onClick={() => onNavigate('contact')}
                      className="bg-white/10 border-white/30 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base font-medium backdrop-blur-sm text-white hover:scale-105"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Enhanced Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 z-10 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 z-10 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Product Counter */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 text-white z-10">
        <div className="text-sm opacity-80 text-center">
          <div className="text-lg font-medium">{currentSlide + 1}</div>
          <div className="text-xs">of {heroSlides.length}</div>
        </div>
      </div>

      {/* Scroll Down Indicator - Only show on first slide */}
      {currentSlide === 0 && (
        <div 
          className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 cursor-pointer"
          onClick={() => {
            if (onProductsPage) {
              onProductsPage();
            } else {
              onNavigate('products');
            }
          }}
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 rotate-90" />
        </div>
      )}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';