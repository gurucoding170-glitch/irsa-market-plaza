import { Star } from 'lucide-react';

export default function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < full ? 'text-primary fill-primary' : half && i === full ? 'text-primary/70 fill-primary/70' : 'text-muted-foreground'} size={16} />
      ))}
    </div>
  );
}
