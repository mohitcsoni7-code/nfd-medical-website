import { memo } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award } from 'lucide-react';

// Import the correct product images (HELIOS image removed as product is temporarily hidden)
import newProductImage2 from 'figma:asset/c6e8cf08900c4f003e91511f850f2c87c661bfc6.png';
import newMicroCatheterImage from 'figma:asset/4c15560a53077225314102fca0149f1574c3886c.png';
import newDistalAccessImage from 'figma:asset/1195dc5a0e132f64fe34dfe37003c74c0b3b457e.png';
import newAspirationImage from 'figma:asset/b7cfcbe616d869c4c435adebe59881b89c9b474b.png';
import newSupportCatheterImage from 'figma:asset/fce1211a4fcd3fe89304df453d80fbd660173153.png';

interface ProductsSectionProps {
  colors: any;
  onProductClick: (productId: string) => void;
  onContactUs: () => void;
}

const ProductsSection = memo(({ colors, onProductClick, onContactUs }: ProductsSectionProps) => {
  // Acute Stroke Solution products (2 products - HELIOS temporarily hidden)
  const acuteStrokeProducts = [
    // HELIOS TEMPORARILY HIDDEN - Uncomment to restore
    // {
    //   id: 'helios',
    //   name: 'HELIOS™',
    //   category: 'Thrombectomy Device',
    //   tagline: 'Safe, Effective, and Reliable / Unleashing the Power of the Cosmos for Better Outcomes',
    //   description: 'Stent-based thrombectomy device for acute ischemic stroke intervention',
    //   features: [
    //     'Precise Thrombectomy',
    //     'Unique Marker Technique',
    //     'Smooth Delivery & Thrombus Integration'
    //   ],
    //   image: newHeliosImage
    // },
    {
      id: 'polaris-aspiration',
      name: 'Polaris Aspiration Catheter',
      category: 'Aspiration Catheter',
      tagline: 'Enhanced Trackability / Redefining Aspiration Excellence',
      description: 'Aspiration catheter with superior trackability and lumen integrity',
      features: [
        'Anti-Break Design',
        'High Accessibility',
        'Large Lumen (0.071-inch)'
      ],
      image: newAspirationImage
    },
    {
      id: 'polaris-micro-acute',
      name: 'POLARIS Micro Catheter',
      category: 'Micro Catheter',
      tagline: 'Your Guide Through the Universe of Precision / Precision as Vast as the Cosmos',
      description: 'Ultra-precision micro catheter engineered for complex neurovascular navigation',
      features: [
        'Galactic Support & Torquability',
        'Stellar Visibility',
        'Interstellar Deliverability'
      ],
      image: newMicroCatheterImage
    }
  ];

  // Hemorrhagic Stroke Solution products (4 products)
  const hemorrhagicStrokeProducts = [
    {
      id: 'terra-coil',
      name: 'Terra Embolization Coil System',
      category: 'Embolization Coil System',
      tagline: 'Precision Embolization / Advanced Coil Technology',
      description: 'Comprehensive embolization coil system for aneurysm and AVM treatment',
      features: [
        'Advanced Platinum Alloy Construction',
        'Precise Detachment Control',
        'Bio-Active Coating Technology'
      ],
      image: newProductImage2
    },
    {
      id: 'polaris-distal-access',
      name: 'Polaris Distal Access Catheter',
      category: 'Distal Access Catheter',
      tagline: 'Unmatched Flexibility / Reliability You Can Trust',
      description: 'Distal access catheter for complex neurovascular navigation',
      features: [
        '0.071 Larger Inner Lumen',
        'Soft & Anti-Kink Tip',
        'Atraumatic Tip'
      ],
      image: newDistalAccessImage
    },
    {
      id: 'polaris-support',
      name: 'Polaris Support Catheter',
      category: 'Support Catheter',
      tagline: 'Seamless Navigation / Precision and Flexibility Combined',
      description: 'Support catheter for neurovascular interventions and embolization procedures',
      features: [
        '8F Embolization Design',
        '8F Long Sheath Design',
        '6F Gradient Material Design'
      ],
      image: newSupportCatheterImage
    },
    {
      id: 'polaris-micro-hemorrhagic',
      name: 'POLARIS Micro Catheter',
      category: 'Micro Catheter',
      tagline: 'Your Guide Through the Universe of Precision / Precision as Vast as the Cosmos',
      description: 'Ultra-precision micro catheter engineered for complex neurovascular navigation',
      features: [
        'Galactic Support & Torquability',
        'Stellar Visibility',
        'Interstellar Deliverability'
      ],
      image: newMicroCatheterImage
    }
  ];

  const renderProductCard = (product: any) => (
    <Card 
      key={product.id}
      className="flex flex-col gap-6 rounded-xl group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
      style={{ 
        boxShadow: 'rgba(11, 180, 170, 0.125) 0px 4px 20px',
        border: '1px solid rgba(11, 180, 170, 0.19)'
      }}
      onClick={() => onProductClick(product.id)}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onProductClick(product.id);
        }
      }}
      aria-label={`${product.name} medical device details`}
      itemScope
      itemType="https://schema.org/MedicalDevice"
    >
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={product.image}
            alt={`${product.name} - ${product.category} neurovascular medical device by NFD for ${product.description}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={400}
            height={300}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            itemProp="image"
            role="img"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge 
              className="border-transparent bg-primary text-white border-0 text-xs"
              style={{ backgroundColor: 'rgb(11, 180, 170)' }}
            >
              {product.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Product Info */}
          <div>
            <h4 
              className="text-xl mb-2 group-hover:text-opacity-80 transition-colors"
              itemProp="name"
              style={{ color: 'rgb(15, 76, 117)' }}
            >
              {product.name}
            </h4>
            <p 
              className="text-sm mb-3"
              style={{ color: 'rgb(11, 180, 170)' }}
            >
              {product.tagline}
            </p>
            <p 
              className="text-sm leading-relaxed"
              itemProp="description"
              style={{ color: 'rgb(71, 85, 105)' }}
            >
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            {product.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-2">
                <div 
                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: 'rgb(11, 180, 170)' }}
                />
                <span 
                  className="text-xs"
                  style={{ color: 'rgb(71, 85, 105)' }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Make in India Certified */}
          <div className="flex items-center space-x-2 pt-2">
            <Award 
              className="w-4 h-4"
              style={{ color: 'rgb(11, 180, 170)' }}
              aria-hidden="true"
            />
            <span 
              className="text-xs"
              style={{ color: 'rgb(71, 85, 105)' }}
            >
              Make in India Certified
            </span>
          </div>

          {/* Learn More Button */}
          <Button 
            variant="outline"
            className="w-full group-hover:scale-105 transition-transform"
            style={{ 
              borderColor: 'rgba(11, 180, 170, 0.314)',
              color: 'rgb(11, 180, 170)',
              backgroundColor: 'transparent'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onProductClick(product.id);
            }}
            aria-label={`Learn more about ${product.name}`}
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section 
      className="py-12 sm:py-16 lg:py-20"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="products-heading"
      style={{ backgroundColor: 'rgb(240, 255, 254)' }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 
            id="products-heading"
            className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6"
            itemProp="name"
            style={{ color: 'rgb(15, 76, 117)' }}
          >
            Advanced Neurovascular Solutions
          </h2>
          <p 
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            style={{ color: 'rgb(71, 85, 105)' }}
          >
            Comprehensive portfolio of cutting-edge medical devices designed for precision, safety, and optimal patient outcomes in neurovascular interventions.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Acute Stroke Solution */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                style={{ color: 'rgb(15, 76, 117)' }}
              >
                Acute Stroke Solution
              </h3>
              <p 
                className="text-base sm:text-lg max-w-2xl mx-auto"
                style={{ color: 'rgb(71, 85, 105)' }}
              >
                Comprehensive devices for mechanical thrombectomy and acute ischemic stroke intervention
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 max-w-4xl">
                {acuteStrokeProducts.map(renderProductCard)}
              </div>
            </div>
          </div>

          {/* Hemorrhagic Stroke Solution */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                style={{ color: 'rgb(15, 76, 117)' }}
              >
                Hemorrhagic Stroke Solution
              </h3>
              <p 
                className="text-base sm:text-lg max-w-2xl mx-auto"
                style={{ color: 'rgb(71, 85, 105)' }}
              >
                Advanced embolization and support systems for aneurysm treatment and hemorrhagic stroke management
              </p>
            </div>
            
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {hemorrhagicStrokeProducts.map(renderProductCard)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="text-center mt-12 sm:mt-16 pt-8 sm:pt-12 border-t"
          style={{ borderColor: 'rgba(11, 180, 170, 0.19)' }}
        >
          <h3 
            className="text-2xl sm:text-3xl mb-4"
            style={{ color: 'rgb(15, 76, 117)' }}
          >
            Ready to Experience NFD Innovation?
          </h3>
          <p 
            className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{ color: 'rgb(71, 85, 105)' }}
          >
            Discover how our cutting-edge neurovascular solutions can enhance your clinical practice and improve patient outcomes.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="text-white"
              style={{ 
                backgroundColor: 'rgb(11, 180, 170)',
                borderColor: 'rgb(11, 180, 170)'
              }}
              onClick={onContactUs}
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

ProductsSection.displayName = 'ProductsSection';

export default ProductsSection;