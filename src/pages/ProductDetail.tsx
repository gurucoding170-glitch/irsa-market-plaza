import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useShop } from '@/context/ShopContext';
import RatingStars from '@/components/shared/RatingStars';
import ProductCard from '@/components/shared/ProductCard';
import { Button } from '@/components/ui/button';

function formatPKR(cents: number) { return `Rs ${cents.toLocaleString()}`; }

export default function ProductDetail() {
  const { id } = useParams();
  const { products, addToCart } = useShop();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="container mx-auto py-10">Product not found.</div>;

  const related = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0,4);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: product.brand,
    image: [product.image],
    description: product.description,
    aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: product.reviews },
    offers: { '@type': 'Offer', priceCurrency: 'PKR', price: product.price, availability: 'https://schema.org/InStock' },
  };

  return (
    <main className="container mx-auto py-6">
      <Helmet>
        <title>{product.name} | Irsa Traders</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`/product/${product.id}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={`${product.name} image`} className="w-full rounded-lg border" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.brand}</p>
          <RatingStars rating={product.rating} />
          <div className="text-2xl font-bold text-primary mt-4">{formatPKR(product.price)}</div>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <Button variant="hero" onClick={() => addToCart(product.id)}>Add to cart</Button>
            <Button variant="secondary">Buy now</Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Related Items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map(r => <ProductCard key={r.id} product={r} />)}
          </div>
        </section>
      )}
    </main>
  );
}
