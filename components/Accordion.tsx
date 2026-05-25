import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Accordion({ items }: { items: { title: string; content: React.ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
          <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex justify-between items-center w-full p-4 bg-slate-900/50 hover:bg-slate-800/50 text-left text-white">
            {item.title}
            <ChevronDown className={`w-4 h-4 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === i && <div className="p-4 bg-slate-900/20 text-slate-300 border-t border-white/5">{item.content}</div>}
        </div>
      ))}
    </div>
  );
}
