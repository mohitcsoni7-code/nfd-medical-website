import { useState, useCallback } from 'react';

export type Route = 'home' | 'products' | 'product' | 'contact' | 'thank-you' | 'product-selector' | 'terms-of-use' | 'privacy-policy' | 'cookie-policy' | 'gdpr-compliance' | 'accessibility';

export interface RouterState {
  route: Route;
  params?: Record<string, string>;
}

export const useRouter = () => {
  const [state, setState] = useState<RouterState>({ route: 'home' });

  const navigate = useCallback((route: Route, params?: Record<string, string>) => {
    setState({ route, params });
    window.scrollTo(0, 0);
  }, []);

  const goHome = useCallback(() => {
    navigate('home');
  }, [navigate]);

  const goToProduct = useCallback((productId: string) => {
    navigate('product', { id: productId });
  }, [navigate]);

  const goToContact = useCallback(() => {
    navigate('contact');
  }, [navigate]);

  const goToThankYou = useCallback(() => {
    navigate('thank-you');
  }, [navigate]);

  const goToProductSelector = useCallback(() => {
    navigate('product-selector');
  }, [navigate]);

  const goToProducts = useCallback(() => {
    navigate('products');
  }, [navigate]);

  const goToTermsOfUse = useCallback(() => {
    navigate('terms-of-use');
  }, [navigate]);

  const goToPrivacyPolicy = useCallback(() => {
    navigate('privacy-policy');
  }, [navigate]);

  const goToCookiePolicy = useCallback(() => {
    navigate('cookie-policy');
  }, [navigate]);

  const goToGDPRCompliance = useCallback(() => {
    navigate('gdpr-compliance');
  }, [navigate]);

  const goToAccessibility = useCallback(() => {
    navigate('accessibility');
  }, [navigate]);

  return {
    currentRoute: state.route,
    params: state.params,
    navigate,
    goHome,
    goToProducts,
    goToProduct,
    goToContact,
    goToThankYou,
    goToProductSelector,
    goToTermsOfUse,
    goToPrivacyPolicy,
    goToCookiePolicy,
    goToGDPRCompliance,
    goToAccessibility
  };
};