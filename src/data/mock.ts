import hero from '@/assets/hero-irsa.jpg';
import catElectronics from '@/assets/cat-electronics.jpg';
import catFashion from '@/assets/cat-fashion.jpg';
import catHome from '@/assets/cat-home.jpg';
import { Category, Product } from '@/types/shop';

export const heroImage = hero;

export const categories: Category[] = [
  { id: 'c1', name: 'Electronics', slug: 'electronics', image: catElectronics },
  { id: 'c2', name: 'Fashion', slug: 'fashion', image: catFashion },
  { id: 'c3', name: 'Home & Kitchen', slug: 'home-kitchen', image: catHome },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Wireless Earbuds Pro',
    brand: 'Sonic',
    price: 4999,
    rating: 4.5,
    reviews: 128,
    categoryId: 'c1',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1200&auto=format&fit=crop',
    description: 'Premium sound with active noise cancellation and 24h battery.',
    popularity: 95,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p2',
    name: 'Smartphone X Lite',
    brand: 'Orbyte',
    price: 29999,
    rating: 4.2,
    reviews: 89,
    categoryId: 'c1',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    description: 'Sleek performance with great camera and all‑day battery life.',
    popularity: 88,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p3',
    name: 'Men’s Running Sneakers',
    brand: 'Fleet',
    price: 7999,
    rating: 4.3,
    reviews: 56,
    categoryId: 'c2',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    description: 'Lightweight comfort with breathable mesh and durable sole.',
    popularity: 76,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'p4',
    name: 'Nonstick Cookware Set',
    brand: 'KitchenPro',
    price: 10999,
    rating: 4.6,
    reviews: 210,
    categoryId: 'c3',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    description: 'Premium nonstick coating and even heat distribution.',
    popularity: 92,
    createdAt: new Date().toISOString(),
  },
];
