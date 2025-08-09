import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import FlashSale from '@/components/home/FlashSale';
import { Helmet } from 'react-helmet-async';
import ProductCard from '@/components/shared/ProductCard';
import { products } from '@/data/mock';

const Index = () => {
  const featured = [...products].sort((a,b) => (b.createdAt || '').localeCompare(a.createdAt || '')).slice(0,8);
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>Irsa Traders — Online Shopping in Pakistan</title>
        <meta name="description" content="Shop electronics, fashion, home & kitchen at Irsa Traders. Flash sales and best prices!" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container mx-auto py-6 space-y-8">
        <HeroBanner />
        <CategoryGrid />
        <FlashSale />
        <section className="mt-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Featured Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
