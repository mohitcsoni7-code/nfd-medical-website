import { memo, useState, useCallback, useMemo } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Filter, 
  Search, 
  CheckCircle,
  AlertCircle,
  Info,
  Target,
  Ruler,
  Shapes
} from 'lucide-react';
import { toast } from "sonner@2.0.3";

interface ProductSelectorPageProps {
  colors: any;
  onBack: () => void;
  onProductClick: (productId: string) => void;
}

interface SelectionCriteria {
  formOfDiameter: string;
  diameterOfAneurysm: string;
  heightOfAneurysm: string;
  shapeOfAneurysm: string;
}

interface ProductMatch {
  id: string;
  name: string;
  image: string;
  compatibility: number;
  reasons: string[];
  specifications: {
    diameter: string;
    height: string;
    shape: string;
    form: string;
  };
}

const ProductSelectorPage = memo(({ colors, onBack, onProductClick }: ProductSelectorPageProps) => {
  const [criteria, setCriteria] = useState<SelectionCriteria>({
    formOfDiameter: '',
    diameterOfAneurysm: '',
    heightOfAneurysm: '',
    shapeOfAneurysm: ''
  });

  const [showResults, setShowResults] = useState(false);

  // Dummy product data for matching
  const productDatabase: ProductMatch[] = [
    {
      id: 'neurovault',
      name: 'NeuroVault',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=300&fit=crop',
      compatibility: 95,
      reasons: ['Optimal diameter compatibility', 'Perfect for wide-neck aneurysms', 'Excellent trackability'],
      specifications: {
        diameter: '4-8mm',
        height: '3-10mm',
        shape: 'Wide-neck',
        form: 'Braided'
      }
    },
    {
      id: 'neuromesh',
      name: 'NeuroMesh',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      compatibility: 88,
      reasons: ['Good size match', 'Suitable for bifurcation aneurysms', 'High radial force'],
      specifications: {
        diameter: '3-6mm',
        height: '2-8mm',
        shape: 'Bifurcation',
        form: 'Laser-cut'
      }
    },
    {
      id: 'neuroguard',
      name: 'NeuroGuard',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
      compatibility: 92,
      reasons: ['Excellent conformability', 'Ideal for irregular shapes', 'Superior wall apposition'],
      specifications: {
        diameter: '2-5mm',
        height: '1-6mm',
        shape: 'Irregular',
        form: 'Woven'
      }
    },
    {
      id: 'neuroflow',
      name: 'NeuroFlow',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      compatibility: 78,
      reasons: ['Moderate compatibility', 'Good for standard cases', 'Reliable performance'],
      specifications: {
        diameter: '3-7mm',
        height: '2-9mm',
        shape: 'Saccular',
        form: 'Hybrid'
      }
    },
    {
      id: 'helios',
      name: 'HELIOS',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      compatibility: 85,
      reasons: ['Advanced flow dynamics', 'Suitable for complex cases', 'Innovative design'],
      specifications: {
        diameter: '4-10mm',
        height: '3-12mm',
        shape: 'Complex',
        form: 'Multi-layer'
      }
    }
  ];

  // Selection options
  const selectionOptions = {
    formOfDiameter: [
      { value: 'braided', label: 'Braided' },
      { value: 'laser-cut', label: 'Laser-cut' },
      { value: 'woven', label: 'Woven' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'multi-layer', label: 'Multi-layer' }
    ],
    diameterOfAneurysm: [
      { value: '1-3mm', label: '1-3mm (Small)' },
      { value: '3-6mm', label: '3-6mm (Medium)' },
      { value: '6-10mm', label: '6-10mm (Large)' },
      { value: '10mm+', label: '10mm+ (Giant)' }
    ],
    heightOfAneurysm: [
      { value: '1-2mm', label: '1-2mm (Very Small)' },
      { value: '2-5mm', label: '2-5mm (Small)' },
      { value: '5-10mm', label: '5-10mm (Medium)' },
      { value: '10-15mm', label: '10-15mm (Large)' },
      { value: '15mm+', label: '15mm+ (Very Large)' }
    ],
    shapeOfAneurysm: [
      { value: 'saccular', label: 'Saccular' },
      { value: 'wide-neck', label: 'Wide-neck' },
      { value: 'bifurcation', label: 'Bifurcation' },
      { value: 'irregular', label: 'Irregular' },
      { value: 'complex', label: 'Complex' }
    ]
  };

  const handleCriteriaChange = useCallback((field: keyof SelectionCriteria, value: string) => {
    setCriteria(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const calculateCompatibility = useCallback((product: ProductMatch) => {
    let score = 0;
    const maxScore = 4;

    // Form compatibility
    if (criteria.formOfDiameter && product.specifications.form.toLowerCase().includes(criteria.formOfDiameter.toLowerCase())) {
      score += 1;
    }

    // Diameter compatibility (simplified logic)
    if (criteria.diameterOfAneurysm) {
      const productDiameter = product.specifications.diameter;
      if (productDiameter.includes(criteria.diameterOfAneurysm.split('-')[0])) {
        score += 1;
      }
    }

    // Height compatibility (simplified logic)
    if (criteria.heightOfAneurysm) {
      const productHeight = product.specifications.height;
      if (productHeight.includes(criteria.heightOfAneurysm.split('-')[0])) {
        score += 1;
      }
    }

    // Shape compatibility
    if (criteria.shapeOfAneurysm && product.specifications.shape.toLowerCase().includes(criteria.shapeOfAneurysm.toLowerCase())) {
      score += 1;
    }

    return Math.round((score / maxScore) * 100);
  }, [criteria]);

  const filteredProducts = useMemo(() => {
    if (!showResults) return [];

    return productDatabase
      .map(product => ({
        ...product,
        compatibility: calculateCompatibility(product)
      }))
      .filter(product => product.compatibility > 30) // Only show products with >30% compatibility
      .sort((a, b) => b.compatibility - a.compatibility);
  }, [criteria, showResults, calculateCompatibility]);

  const handleSearch = useCallback(() => {
    const filledCriteria = Object.values(criteria).filter(Boolean).length;
    
    if (filledCriteria === 0) {
      toast("Please select at least one criterion to search for products.");
      return;
    }

    setShowResults(true);
    toast(`Found ${filteredProducts.length} matching products based on your criteria.`);
  }, [criteria, filteredProducts.length]);

  const handleReset = useCallback(() => {
    setCriteria({
      formOfDiameter: '',
      diameterOfAneurysm: '',
      heightOfAneurysm: '',
      shapeOfAneurysm: ''
    });
    setShowResults(false);
  }, []);

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return colors.accent;
    if (score >= 75) return '#22c55e';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getCompatibilityIcon = (score: number) => {
    if (score >= 90) return CheckCircle;
    if (score >= 75) return CheckCircle;
    if (score >= 60) return Info;
    return AlertCircle;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl" style={{ color: colors.primary }}>Product Selector</h1>
              <p className="mt-2" style={{ color: colors.secondary }}>
                Find the perfect product based on your specific aneurysm characteristics
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

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Selection Criteria */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6" style={{ borderColor: colors.accent + '30' }}>
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" style={{ color: colors.accent }} />
                  <h2 className="text-xl" style={{ color: colors.primary }}>Selection Criteria</h2>
                </div>

                <p className="text-sm" style={{ color: colors.secondary }}>
                  Fill in the aneurysm characteristics to find the most suitable products.
                </p>

                <div className="space-y-4">
                  {/* Form of Diameter */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm" style={{ color: colors.primary }}>
                      <Shapes className="w-4 h-4" />
                      <span>Form of Diameter</span>
                    </label>
                    <Select 
                      value={criteria.formOfDiameter} 
                      onValueChange={(value) => handleCriteriaChange('formOfDiameter', value)}
                    >
                      <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                        <SelectValue placeholder="Select form type" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectionOptions.formOfDiameter.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Diameter of Aneurysm */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm" style={{ color: colors.primary }}>
                      <Target className="w-4 h-4" />
                      <span>Diameter of Aneurysm</span>
                    </label>
                    <Select 
                      value={criteria.diameterOfAneurysm} 
                      onValueChange={(value) => handleCriteriaChange('diameterOfAneurysm', value)}
                    >
                      <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                        <SelectValue placeholder="Select diameter range" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectionOptions.diameterOfAneurysm.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Height of Aneurysm */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm" style={{ color: colors.primary }}>
                      <Ruler className="w-4 h-4" />
                      <span>Height of Aneurysm</span>
                    </label>
                    <Select 
                      value={criteria.heightOfAneurysm} 
                      onValueChange={(value) => handleCriteriaChange('heightOfAneurysm', value)}
                    >
                      <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                        <SelectValue placeholder="Select height range" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectionOptions.heightOfAneurysm.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Shape of Aneurysm */}
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm" style={{ color: colors.primary }}>
                      <Shapes className="w-4 h-4" />
                      <span>Shape of Aneurysm</span>
                    </label>
                    <Select 
                      value={criteria.shapeOfAneurysm} 
                      onValueChange={(value) => handleCriteriaChange('shapeOfAneurysm', value)}
                    >
                      <SelectTrigger style={{ borderColor: colors.accent + '50' }}>
                        <SelectValue placeholder="Select shape type" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectionOptions.shapeOfAneurysm.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button 
                    onClick={handleSearch}
                    className="w-full text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Find Matching Products
                  </Button>
                  
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="w-full"
                    style={{ borderColor: colors.accent + '50', color: colors.secondary }}
                  >
                    Reset Criteria
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: colors.accent + '20' }}>
                  <Search className="w-8 h-8" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-xl mb-2" style={{ color: colors.primary }}>Select Your Criteria</h3>
                <p style={{ color: colors.secondary }}>
                  Choose your aneurysm characteristics to find the most suitable products for your procedure.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl" style={{ color: colors.primary }}>
                    Matching Products ({filteredProducts.length})
                  </h2>
                  <div className="text-sm" style={{ color: colors.secondary }}>
                    Sorted by compatibility
                  </div>
                </div>

                {filteredProducts.length === 0 ? (
                  <Card className="p-8 text-center" style={{ borderColor: colors.accent + '30' }}>
                    <AlertCircle className="w-12 h-12 mx-auto mb-4" style={{ color: colors.secondary }} />
                    <h3 className="text-lg mb-2" style={{ color: colors.primary }}>No Matching Products</h3>
                    <p style={{ color: colors.secondary }}>
                      Try adjusting your criteria to find suitable products.
                    </p>
                  </Card>
                ) : (
                  <div className="grid gap-6">
                    {filteredProducts.map((product) => {
                      const CompatibilityIcon = getCompatibilityIcon(product.compatibility);
                      return (
                        <Card key={product.id} className="p-6 hover:shadow-lg transition-shadow" style={{ borderColor: colors.accent + '30' }}>
                          <div className="grid md:grid-cols-4 gap-6 items-center">
                            {/* Product Image */}
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                              <ImageWithFallback
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="md:col-span-2 space-y-3">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg" style={{ color: colors.primary }}>{product.name}</h3>
                                <div className="flex items-center space-x-2">
                                  <CompatibilityIcon 
                                    className="w-5 h-5" 
                                    style={{ color: getCompatibilityColor(product.compatibility) }} 
                                  />
                                  <Badge 
                                    variant="outline" 
                                    style={{ 
                                      borderColor: getCompatibilityColor(product.compatibility),
                                      color: getCompatibilityColor(product.compatibility)
                                    }}
                                  >
                                    {product.compatibility}% Match
                                  </Badge>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <h4 className="text-sm" style={{ color: colors.primary }}>Why this matches:</h4>
                                <div className="space-y-1">
                                  {product.reasons.slice(0, 2).map((reason, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                                      <span className="text-sm" style={{ color: colors.secondary }}>{reason}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span style={{ color: colors.secondary }}>Diameter: </span>
                                  <span style={{ color: colors.primary }}>{product.specifications.diameter}</span>
                                </div>
                                <div>
                                  <span style={{ color: colors.secondary }}>Height: </span>
                                  <span style={{ color: colors.primary }}>{product.specifications.height}</span>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="space-y-2">
                              <Button 
                                onClick={() => onProductClick(product.id)}
                                className="w-full text-white text-sm"
                                style={{ backgroundColor: colors.accent }}
                              >
                                View Details
                              </Button>
                              <Button 
                                variant="outline"
                                className="w-full text-sm"
                                style={{ borderColor: colors.accent + '50', color: colors.secondary }}
                                onClick={() => toast("Technical specifications downloaded!")}
                              >
                                Download Specs
                              </Button>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

ProductSelectorPage.displayName = 'ProductSelectorPage';

export default ProductSelectorPage;