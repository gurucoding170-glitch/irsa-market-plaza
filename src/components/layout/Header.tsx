import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Heart, User, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useShop } from '@/context/ShopContext';
import { useState } from 'react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const { cart } = useShop();
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto py-3 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary" aria-hidden />
          <span className="font-semibold text-lg">{t('brand')}</span>
        </Link>

        <form onSubmit={submit} className="flex-1 flex items-center gap-2 max-w-3xl mx-auto">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('search_placeholder')!} className="h-10" />
          <Button type="submit" variant="hero">Search</Button>
        </form>

        <nav className="flex items-center gap-3">
          <Link to="/wishlist" aria-label={t('wishlist')!} className="relative p-2 rounded-md hover:bg-accent">
            <Heart className="text-foreground" />
          </Link>
          <Link to="/cart" aria-label={t('cart')!} className="relative p-2 rounded-md hover:bg-accent">
            <ShoppingCart className="text-foreground" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-primary text-primary-foreground rounded-full px-1.5 py-0.5">
                {cart.length}
              </span>
            )}
          </Link>
          <Link to="/auth/login" aria-label={t('account')!} className="p-2 rounded-md hover:bg-accent">
            <User className="text-foreground" />
          </Link>
          <button
            aria-label="language"
            className="p-2 rounded-md hover:bg-accent"
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ur' : 'en')}
            type="button"
          >
            <Globe className="text-foreground" />
          </button>
        </nav>
      </div>
    </header>
  );
}
