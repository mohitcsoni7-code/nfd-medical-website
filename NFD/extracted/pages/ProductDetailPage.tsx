import { memo, useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from "sonner@2.0.3";
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Award, 
  Shield, 
  Download,
  Share2,
  Star,
  Users,
  Clock,
  Zap,
  Heart,
  Activity,
  Microscope,
  TrendingUp,
  FileText,
  Phone,
  Calendar,
  MapPin,
  Globe,
  ChevronRight
} from 'lucide-react';
import { ProductData } from '../data/productsData';
import { downloadProductBrochure } from '../utils/catalogUtils';

interface ProductDetailPageProps {
  product: ProductData;
  colors: any;
  onBack: () => void;
  onContactUs: () => void;
}

const ProductDetailPage = memo(({ product, colors, onBack, onContactUs }: ProductDetailPageProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Check if this is the HELIOS product
  const isHeliosProduct = product.id === 'helios';

  const handlePlayDemo = useCallback(() => {
    toast(`Playing ${product.name} product demo`);
  }, [product.name]);

  const handleDownloadBrochure = useCallback(() => {
    if (product.brochurePDF) {
      const success = downloadProductBrochure(product.brochurePDF, product.name);
      if (success) {
        toast('Product brochure download starting...');
      } else {
        toast('Unable to download brochure. Please try again.');
      }
    } else {
      toast('Product brochure will be available soon!');
    }
  }, [product.brochurePDF, product.name]);

  const handleContactUs = useCallback(() => {
    onContactUs();
  }, [onContactUs]);

  const handleShare = useCallback(() => {
    toast('Product link copied to clipboard!');
  }, []);




  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="border-b" style={{ borderColor: colors.accent + '20' }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4"
            style={{ color: colors.secondary }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12" style={{ backgroundColor: colors.lightBg }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <Badge className="text-white border-0" style={{ backgroundColor: colors.accent }}>
                  {product.category}
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl" style={{ color: colors.primary }}>
                  {product.name}
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl" style={{ color: colors.secondary }}>
                  {product.tagline}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: colors.secondary }}>
                  {product.fullDescription}
                </p>
              </div>



              {/* CTA Buttons - Better mobile stacking */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg"
                  onClick={handleContactUs}
                  className="text-white w-full sm:w-auto"
                  style={{ backgroundColor: colors.accent, borderColor: colors.accent }}
                >
                  Contact Us
                  <Play className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleDownloadBrochure}
                  className="w-full sm:w-auto"
                  style={{ borderColor: colors.accent + '50', color: colors.secondary }}
                >
                  Download Brochure
                  <Download className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="ghost"
                  onClick={handleShare}
                  className="w-full sm:w-auto"
                  style={{ color: colors.secondary }}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Image - Single image display */}
            <div className="relative aspect-video rounded-lg overflow-hidden" style={{ backgroundColor: colors.lightBg }}>
              <ImageWithFallback
                src={isHeliosProduct ? product.image : product.gallery[0]}
                alt={`${product.name} - Main View`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Information Tabs - Enhanced Design */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8 sm:space-y-10">
            {/* Enhanced tabs with better sizing and no vertical scroll */}
            <div className="flex justify-center">
              <div className="overflow-x-auto max-w-full">
                <TabsList className={`grid w-max gap-1 sm:gap-2 mx-auto h-auto p-1 ${isHeliosProduct ? 'grid-cols-4' : 'grid-cols-5'}`}>
                  <TabsTrigger 
                    value="overview" 
                    className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0 whitespace-nowrap"
                    style={{ 
                      backgroundColor: activeTab === 'overview' ? colors.accent + '20' : 'transparent',
                      color: activeTab === 'overview' ? colors.primary : colors.secondary,
                      borderColor: activeTab === 'overview' ? colors.accent : 'transparent'
                    }}
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="features" 
                    className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0 whitespace-nowrap"
                    style={{ 
                      backgroundColor: activeTab === 'features' ? colors.accent + '20' : 'transparent',
                      color: activeTab === 'features' ? colors.primary : colors.secondary,
                      borderColor: activeTab === 'features' ? colors.accent : 'transparent'
                    }}
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger 
                    value="specifications" 
                    className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0 whitespace-nowrap"
                    style={{ 
                      backgroundColor: activeTab === 'specifications' ? colors.accent + '20' : 'transparent',
                      color: activeTab === 'specifications' ? colors.primary : colors.secondary,
                      borderColor: activeTab === 'specifications' ? colors.accent : 'transparent'
                    }}
                  >
                    Specifications
                  </TabsTrigger>
                  {/* Benefits tab - Hide for HELIOS product */}
                  {!isHeliosProduct && (
                    <TabsTrigger 
                      value="benefits" 
                      className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0 whitespace-nowrap"
                      style={{ 
                        backgroundColor: activeTab === 'benefits' ? colors.accent + '20' : 'transparent',
                        color: activeTab === 'benefits' ? colors.primary : colors.secondary,
                        borderColor: activeTab === 'benefits' ? colors.accent : 'transparent'
                      }}
                    >
                      Benefits
                    </TabsTrigger>
                  )}
                  <TabsTrigger 
                    value="certifications" 
                    className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-w-0 whitespace-nowrap"
                    style={{ 
                      backgroundColor: activeTab === 'certifications' ? colors.accent + '20' : 'transparent',
                      color: activeTab === 'certifications' ? colors.primary : colors.secondary,
                      borderColor: activeTab === 'certifications' ? colors.accent : 'transparent'
                    }}
                  >
                    Certifications
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>Product Overview</h2>
                <p className="text-base sm:text-lg max-w-4xl mx-auto" style={{ color: colors.secondary }}>
                  {product.overview || product.fullDescription}
                </p>
              </div>

              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                {/* Key Capabilities */}
                {product.keyCapabilities && (
                  <Card className="p-4 sm:p-6" style={{ borderColor: colors.accent + '30' }}>
                    <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: colors.primary }}>Key Capabilities</h3>
                    <div className="space-y-2 sm:space-y-3">
                      {product.keyCapabilities.map((capability, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                          <span className="text-sm sm:text-base" style={{ color: colors.secondary }}>{capability}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Technical Advantages */}
                {product.technicalAdvantages && (
                  <Card className="p-4 sm:p-6" style={{ borderColor: colors.accent + '30' }}>
                    <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: colors.primary }}>Technical Advantages</h3>
                    <div className="space-y-2 sm:space-y-3">
                      {product.technicalAdvantages.map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                          <span className="text-sm sm:text-base" style={{ color: colors.secondary }}>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Fallback if no specific capabilities/advantages */}
                {!product.keyCapabilities && !product.technicalAdvantages && (
                  <Card className="p-4 sm:p-6 md:col-span-2" style={{ borderColor: colors.accent + '30' }}>
                    <h3 className="text-lg sm:text-xl mb-3 sm:mb-4" style={{ color: colors.primary }}>Product Highlights</h3>
                    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                      {product.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                          <span className="text-sm sm:text-base" style={{ color: colors.secondary }}>{feature.title}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            </TabsContent>



            {/* Features Tab - Mobile Optimized */}
            <TabsContent value="features" className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>Advanced Features</h2>
                <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                  Cutting-edge technology designed for precision, safety, and optimal patient outcomes
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {product.features.map((feature, index) => (
                  <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow" style={{ borderColor: colors.accent + '30' }}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: colors.accent + '20' }}>
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: colors.accent }} />
                      </div>
                      <h3 className="text-sm sm:text-base" style={{ color: colors.primary }}>{feature.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed" style={{ color: colors.secondary }}>{feature.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>Technical Specifications</h2>
                <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                  Detailed technical information and system requirements
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {product.specifications.map((spec, index) => (
                  <Card key={index} className="p-4 sm:p-6 w-full max-w-md" style={{ borderColor: colors.accent + '30' }}>
                    <h3 className="text-sm sm:text-base mb-3 sm:mb-4" style={{ color: colors.primary }}>{spec.category}</h3>
                    <div className="space-y-2 sm:space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start gap-2">
                          <span className="text-xs sm:text-sm min-w-0" style={{ color: colors.secondary }}>{item.label}:</span>
                          <span className="text-xs sm:text-sm text-right" style={{ color: colors.primary }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Benefits Tab - Hide for HELIOS product */}
            {!isHeliosProduct && (
              <TabsContent value="benefits" className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>Clinical Benefits</h2>
                  <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                    Proven advantages and outcomes achieved in clinical practice
                  </p>
                </div>
                
                <div className="grid gap-3 sm:gap-6 md:grid-cols-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg bg-white shadow-sm border" style={{ borderColor: colors.accent + '20' }}>
                      <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 mt-1 flex-shrink-0" style={{ color: colors.accent }} />
                      <p className="text-xs sm:text-sm" style={{ color: colors.secondary }}>{benefit}</p>
                    </div>
                  ))}
                </div>
                

              </TabsContent>
            )}

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>Certifications & Compliance</h2>
                <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                  Meeting the highest standards for safety, quality, and regulatory compliance
                </p>
              </div>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {product.certifications.map((cert, index) => (
                  <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow" style={{ borderColor: colors.accent + '30' }}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: colors.accent + '20' }}>
                        <Award className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: colors.accent }} />
                      </div>
                      <h3 className="text-sm sm:text-base" style={{ color: colors.primary }}>{cert}</h3>
                      <Badge variant="outline" style={{ borderColor: colors.accent, color: colors.accent }}>
                        Certified
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: colors.lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl" style={{ color: colors.primary }}>
            Ready to Experience {product.name}?
          </h2>
          <p className="text-base sm:text-lg" style={{ color: colors.secondary }}>
            Join thousands of healthcare professionals who trust NFD for their neuro-intervention needs.
          </p>
          
          <div className="flex justify-center mb-6 sm:mb-8">
            <Card className="p-6 sm:p-8 max-w-md w-full" style={{ borderColor: colors.accent + '30' }}>
              <div className="space-y-4 sm:space-y-6 text-center">
                <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" style={{ color: colors.accent }} />
                <h3 className="text-lg sm:text-xl" style={{ color: colors.primary }}>Schedule a Demo</h3>
                <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                  Book a personalized demonstration with our clinical specialists
                </p>
                <Button 
                  onClick={handleContactUs}
                  className="text-white w-full"
                  style={{ backgroundColor: colors.accent }}
                >
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm" style={{ color: colors.secondary }}>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Quick 30-min demo</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Expert guidance</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Global support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

ProductDetailPage.displayName = 'ProductDetailPage';

export default ProductDetailPage;