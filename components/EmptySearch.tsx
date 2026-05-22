import React from 'react';
import { SearchX } from 'lucide-react';

export function EmptySearch({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4"><SearchX className="w-8 h-8 text-slate-500" /></div>
      <h3 className="text-xl font-medium text-white mb-2">No results found</h3>
      <p className="text-slate-400">We couldn't find anything matching "{query}". Try adjusting your search.</p>
    </div>
  );
}
