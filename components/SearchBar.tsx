import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ placeholder = 'Search...' }: { placeholder?: string }) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <input type="text" placeholder={placeholder} className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-full text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 transition-colors" />
    </div>
  );
}
