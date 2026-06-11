import React from 'react';
import { Filter } from 'lucide-react';

export function FilterBar({ filters, onFilter }: { filters: string[]; onFilter: (f: string) => void }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-white/5 rounded-full text-sm text-slate-400 shrink-0">
        <Filter className="w-4 h-4" /> Filters
      </div>
      {filters.map((f, i) => (
        <button key={i} onClick={() => onFilter(f)} className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 border border-white/5 rounded-full text-sm text-slate-300 shrink-0 transition-colors">
          {f}
        </button>
      ))}
    </div>
  );
}
