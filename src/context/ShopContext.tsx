import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItem, Product } from '@/types/shop';
import { products as mockProducts } from '@/data/mock';

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[]; // product ids
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  clearCart: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const STORAGE_CART = 'irsa_cart_v1';
const STORAGE_WISHLIST = 'irsa_wishlist_v1';

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_CART) || '[]'); } catch { return []; }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_WISHLIST) || '[]'); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem(STORAGE_CART, JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(wishlist)); }, [wishlist]);

  const addToCart = (productId: string, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) return prev.map((i) => i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i);
      return [...prev, { productId, quantity }];
    });
  };

  const removeFromCart = (productId: string) => setCart((prev) => prev.filter((i) => i.productId !== productId));
  const updateQty = (productId: string, quantity: number) => setCart((prev) => prev.map((i) => i.productId === productId ? { ...i, quantity } : i));
  const toggleWishlist = (productId: string) => setWishlist((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]);
  const clearCart = () => setCart([]);

  const value = useMemo(() => ({ products: mockProducts, cart, wishlist, addToCart, removeFromCart, updateQty, toggleWishlist, clearCart }), [cart, wishlist]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error('useShop must be used within ShopProvider');
  return ctx;
};
