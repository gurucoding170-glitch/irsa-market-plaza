import { useNavigate } from 'react-router-dom';
import { useShop } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Checkout() {
  const { cart, clearCart } = useShop();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', address: '', city: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    // Simulate order placement
    clearCart();
    navigate('/dashboard');
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      <form onSubmit={submit} className="max-w-2xl space-y-4">
        <div>
          <label className="text-sm">Full name</label>
          <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        </div>
        <div>
          <label className="text-sm">Address</label>
          <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
        </div>
        <div>
          <label className="text-sm">City</label>
          <Input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
        </div>
        <div className="pt-2">
          <Button type="submit" variant="hero">Place Order</Button>
        </div>
      </form>
      <p className="text-xs text-muted-foreground mt-6">Note: For live payments (Stripe/PayPal) we will enable secure checkout after connecting backend.</p>
    </main>
  );
}
