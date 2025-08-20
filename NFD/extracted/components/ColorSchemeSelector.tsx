import { memo, useState } from 'react';
import { Button } from './ui/button';
import { CheckCircle, Palette, ChevronDown } from 'lucide-react';
import { colorSchemes } from './ColorSchemes';

interface ColorSchemeSelectorProps {
  currentScheme: string;
  onSchemeChange: (scheme: string) => void;
}

export const ColorSchemeSelector = memo(({ currentScheme, onSchemeChange }: ColorSchemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSchemeSelect = (scheme: string) => {
    onSchemeChange(scheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg hover:shadow-xl transition-all"
        >
          <Palette className="w-4 h-4 mr-2" />
          Themes
          <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[280px] max-h-[400px] overflow-y-auto">
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-3">Choose your preferred theme:</p>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(colorSchemes).map(([key, scheme]) => (
                  <button
                    key={key}
                    onClick={() => handleSchemeSelect(key)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                      currentScheme === key 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                      style={{ background: scheme.preview }}
                    />
                    <div className="flex-1 text-left">
                      <div className="text-sm">{scheme.name}</div>
                    </div>
                    {currentScheme === key && (
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

ColorSchemeSelector.displayName = 'ColorSchemeSelector';