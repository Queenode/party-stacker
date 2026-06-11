import React from 'react';
import { Star } from 'lucide-react';

export function RatingStars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-orange-500 text-orange-500' : 'fill-transparent text-slate-600'}`} />
      ))}
    </div>
  );
}
