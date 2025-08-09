import { categories } from '@/data/mock';
import { Link } from 'react-router-dom';

export default function CategoryGrid() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">Categories</h2>
        <Link className="text-sm text-primary" to="/categories">View all</Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((c) => (
          <Link key={c.id} to={`/?category=${c.slug}`} className="group rounded-lg border overflow-hidden bg-card hover:shadow-sm">
            <div className="aspect-video overflow-hidden">
              {c.image && <img src={c.image} alt={`${c.name} category`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />}
            </div>
            <div className="p-3 text-center text-sm font-medium">{c.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
