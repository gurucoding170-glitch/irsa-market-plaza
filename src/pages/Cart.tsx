import { Link } from 'react-router-dom';
import { useShop } from '@/context/ShopContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

function formatPKR(cents: number) { return `Rs ${cents.toLocaleString()}`; }

export default function Cart() {
  const { cart, products, updateQty, removeFromCart } = useShop();
  const [code, setCode] = useState('');

  const detailed = cart.map(ci => ({
    ...ci,
    product: products.find(p => p.id === ci.productId)!,
  })).filter(i => i.product);

  const subtotal = detailed.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  const discount = code.trim().toUpperCase() === 'IRSA10' ? Math.round(subtotal * 0.10) : 0;
  const total = subtotal - discount;

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
      {detailed.length === 0 ? (
        <div className="text-center p-10 border rounded-lg">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild><Link to="/">Continue Shopping</Link></Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-4">
            {detailed.map((i) => (
              <div key={i.productId} className="flex gap-4 p-4 border rounded-lg">
                <img src={i.product.image} alt={i.product.name} className="h-24 w-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium">{i.product.name}</h3>
                  <p className="text-sm text-muted-foreground">{i.product.brand}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <label className="text-sm">Qty</label>
                    <Input type="number" min={1} value={i.quantity} onChange={(e) => updateQty(i.productId, Math.max(1, Number(e.target.value)))} className="w-20 h-9" />
                    <Button variant="ghost" onClick={() => removeFromCart(i.productId)}>Remove</Button>
                  </div>
                </div>
                <div className="font-semibold text-primary">{formatPKR(i.product.price * i.quantity)}</div>
              </div>
            ))}
          </section>
          <aside className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Summary</h4>
              <div className="flex justify-between text-sm mb-1"><span>Subtotal</span><span>{formatPKR(subtotal)}</span></div>
              <div className="flex justify-between text-sm mb-3"><span>Discount</span><span>-{formatPKR(discount)}</span></div>
              <div className="flex justify-between font-semibold"><span>Total</span><span>{formatPKR(total)}</span></div>
              <Button asChild className="w-full mt-4" variant="hero"><Link to="/checkout">Proceed to Checkout</Link></Button>
            </div>
            <div className="p-4 border rounded-lg">
              <label className="text-sm">Discount code</label>
              <div className="mt-2 flex gap-2">
                <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code (try IRSA10)" />
                <Button onClick={() => setCode(code.trim())}>Apply</Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
