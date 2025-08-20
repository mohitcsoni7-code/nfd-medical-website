import { toast } from "sonner@2.0.3";
import { colorSchemes } from '../components/ColorSchemes';

export const createHandlers = (
  setIsMenuOpen: (open: boolean) => void,
  setCurrentScheme: (scheme: string) => void,
  goToProduct: (productId: string) => void,
  goToContact: () => void,
  goToThankYou: () => void
) => {
  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleSchemeChange = (scheme: string) => {
    setCurrentScheme(scheme);
    toast(`Switched to ${colorSchemes[scheme as keyof typeof colorSchemes].name} theme`);
  };

  const handleProductClick = (productId: string) => {
    goToProduct(productId);
  };

  const handleContactUsFromProduct = () => {
    goToContact();
  };

  const handleFormSubmit = () => {
    goToThankYou();
  };

  return {
    handleMenuToggle,
    handleSchemeChange,
    handleProductClick,
    handleContactUsFromProduct,
    handleFormSubmit
  };
};