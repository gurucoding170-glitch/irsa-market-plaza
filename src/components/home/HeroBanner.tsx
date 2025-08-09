import { Button } from '@/components/ui/button';
import { heroImage } from '@/data/mock';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative rounded-xl overflow-hidden shadow-sm">
      <img src={heroImage} alt="Irsa Traders best deals banner" className="w-full h-[260px] md:h-[360px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="p-6 md:p-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">Shop Best Deals Every Day</h1>
          <p className="text-muted-foreground max-w-xl mb-5">Flash sales, top brands, and fast delivery. Discover electronics, fashion, home and more.</p>
          <Button asChild variant="hero" size="lg"><Link to="/">Start Shopping</Link></Button>
        </div>
      </div>
    </section>
  );
}
