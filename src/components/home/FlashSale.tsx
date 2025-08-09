import { products } from '@/data/mock';
import ProductCard from '@/components/shared/ProductCard';

export default function FlashSale() {
  const items = [...products].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 8);
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Flash Sale</h2>
        <a href="/" className="text-sm text-primary">See more</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
