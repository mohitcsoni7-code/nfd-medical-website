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

  const handleFormSubmit = async () => {
    try {
      const formEl = document.querySelector('form');
      const payload: Record<string, string> = {};
      if (formEl) {
        const fd = new FormData(formEl as HTMLFormElement);
        fd.forEach((v, k) => { payload[k] = String(v); });
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        toast('Message sent successfully!');
        goToThankYou();
      } else {
        toast('Failed to send message. Please try again.');
      }
    } catch (e) {
      toast('Failed to send message. Please try again.');
    }
  };

  return {
    handleMenuToggle,
    handleSchemeChange,
    handleProductClick,
    handleContactUsFromProduct,
    handleFormSubmit
  };
};