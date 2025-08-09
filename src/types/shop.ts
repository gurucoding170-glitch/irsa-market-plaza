export type Category = {
  id: string;
  name: string;
  slug: string;
  image?: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number; // in cents
  rating: number;
  reviews: number;
  categoryId: string;
  image: string;
  description: string;
  images?: string[];
  popularity?: number;
  createdAt?: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
