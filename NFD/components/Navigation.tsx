import { memo, useCallback, useMemo } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
const nfdLogo = '/images/nfd-logo.png';

interface NavigationProps {
  colors: any;
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navigation = memo(({ colors, isMenuOpen, onMenuToggle, onNavigate }: NavigationProps) => {
  const navItems = useMemo(() => [
    { id: 'products', label: 'Products', preload: () => import('../pages/ProductsPage') },
    { id: 'about', label: 'About' },
    { id: 'why-choose', label: 'Why Choose Us', preload: () => import('./WhyChooseSection') },
    { id: 'expertise', label: 'Expertise', preload: () => import('./ExpertiseSection') },
    { id: 'mission', label: 'Mission', preload: () => import('./MissionSection') },
    { id: 'contact', label: 'Contact', preload: () => import('../pages/ContactPage') }
  ], []);

  const handleNavHover = useCallback((item: typeof navItems[0]) => {
    // Completely disable all preloading to avoid any performance impact
    return; // Do nothing on hover
  }, []);

  const handleNavClick = useCallback((itemId: string) => {
    onNavigate(itemId);
  }, [onNavigate]);

  const handleLogoClick = useCallback(() => {
    onNavigate('hero');
    if (isMenuOpen) onMenuToggle();
  }, [onNavigate, isMenuOpen, onMenuToggle]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm" style={{ borderColor: colors.accent + '20' }}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick} 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
              aria-label="NFD Home"
            >
              <img 
                src={nfdLogo} 
                alt="NFD - Neuro Flow Dynamics" 
                className="h-12 w-auto object-contain"
              />
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
onMouseEnter={() => {}}
                className="transition-colors hover:opacity-80 px-3 py-2 rounded-md cursor-pointer"
                style={{ color: colors.secondary }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Enhanced visibility */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ 
              color: colors.primary,
              focusRingColor: colors.accent 
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu - Enhanced */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm" style={{ borderColor: colors.accent + '20' }}>
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => {
                    // Skip preloading on click too
                    handleNavClick(item.id); // This function already handles closing the menu
                  }} 
                  className="block w-full text-left px-4 py-3 rounded-md transition-colors hover:bg-gray-50 active:bg-gray-100"
                  style={{ color: colors.secondary }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';