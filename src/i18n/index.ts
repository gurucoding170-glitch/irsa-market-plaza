import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brand: 'Irsa Traders',
      search_placeholder: 'Search for products, brands and more',
      categories: 'Categories',
      flash_sale: 'Flash Sale',
      featured_products: 'Featured Products',
      add_to_cart: 'Add to cart',
      wishlist: 'Wishlist',
      cart: 'Cart',
      account: 'Account',
      login: 'Login',
      signup: 'Sign up',
      logout: 'Logout',
      dashboard: 'Dashboard',
      checkout: 'Checkout',
      apply: 'Apply',
      discount_code: 'Discount code',
      subtotal: 'Subtotal',
      total: 'Total',
      place_order: 'Place Order',
      related_items: 'Related Items',
    },
  },
  ur: {
    translation: {
      brand: 'عرصہ ٹریڈرز',
      search_placeholder: 'مصنوعات، برانڈز اور مزید تلاش کریں',
      categories: 'شعبے',
      flash_sale: 'فلیش سیل',
      featured_products: 'نمایاں مصنوعات',
      add_to_cart: 'کارٹ میں شامل کریں',
      wishlist: 'پسندیدہ',
      cart: 'کارٹ',
      account: 'اکاؤنٹ',
      login: 'لاگ اِن',
      signup: 'سائن اپ',
      logout: 'لاگ آؤٹ',
      dashboard: 'ڈیش بورڈ',
      checkout: 'چیک آؤٹ',
      apply: 'لاگو کریں',
      discount_code: 'ڈسکاؤنٹ کوڈ',
      subtotal: 'ذیلی کل',
      total: 'کل',
      place_order: 'آرڈر کریں',
      related_items: 'متعلقہ اشیاء',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
