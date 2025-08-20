import { memo } from 'react';
import { Button } from '../components/ui/button';
import ProductsSection from '../components/ProductsSection';
import { ArrowLeft } from 'lucide-react';

interface ProductsPageProps {
  colors: any;
  onBack: () => void;
  onProductClick: (productId: string) => void;
}

const ProductsPage = memo(({ colors, onBack, onProductClick }: ProductsPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b" style={{ borderColor: colors.accent + '20' }}>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl" style={{ color: colors.primary }}>
                Our Products
              </h1>
              <p className="mt-2 text-lg sm:text-xl" style={{ color: colors.secondary }}>
                Comprehensive portfolio of cutting-edge neurovascular medical devices
              </p>
            </div>
            <Button 
              onClick={onBack}
              variant="outline"
              className="transition-colors"
              style={{ borderColor: colors.accent + '50', color: colors.secondary }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white">
        <ProductsSection colors={colors} onProductClick={onProductClick} />
      </div>
    </div>
  );
});

ProductsPage.displayName = 'ProductsPage';

export default ProductsPage;