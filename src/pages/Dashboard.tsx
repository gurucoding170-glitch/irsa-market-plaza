import { useShop } from '@/context/ShopContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { wishlist, products } = useShop();
  const wish = products.filter(p => wishlist.includes(p.id));
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">My Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-3">Wishlist</h2>
        {wish.length === 0 ? (
          <p className="text-sm text-muted-foreground">No items in wishlist.</p>
        ) : (
          <ul className="space-y-2">
            {wish.map(w => (
              <li key={w.id} className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center gap-3">
                  <img src={w.image} className="h-12 w-12 object-cover rounded" />
                  <span>{w.name}</span>
                </div>
                <Link className="text-primary text-sm" to={`/product/${w.id}`}>View</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <h2 className="text-lg font-medium mb-3">Order History</h2>
        <p className="text-sm text-muted-foreground">Orders will appear here after checkout is connected.</p>
      </section>
    </main>
  );
}
