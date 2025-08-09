import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import RatingStars from './RatingStars';
import { useShop } from '@/context/ShopContext';
import { Product } from '@/types/shop';

function formatPKR(cents: number) {
  return `Rs ${(cents).toLocaleString()}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useShop();
  return (
    <article className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="aspect-square overflow-hidden">
        <img src={product.image} alt={`${product.name} by ${product.brand}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
        <RatingStars rating={product.rating} />
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-primary">{formatPKR(product.price)}</span>
          <Button variant="secondary" onClick={() => addToCart(product.id)} aria-label={`Add ${product.name} to cart`}>
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
}
