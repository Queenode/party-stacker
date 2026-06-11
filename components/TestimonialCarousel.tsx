import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialCarousel({ testimonials }: { testimonials: { text: string; author: string }[] }) {
  const [active, setActive] = useState(0);
  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  if(!testimonials.length) return null;
  return (
    <div className="relative p-8 bg-slate-900 rounded-2xl text-center">
      <p className="text-xl text-slate-300 italic mb-6">"{testimonials[active].text}"</p>
      <div className="font-medium text-white">- {testimonials[active].author}</div>
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white"><ChevronLeft className="w-5 h-5"/></button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white"><ChevronRight className="w-5 h-5"/></button>
    </div>
  );
}
