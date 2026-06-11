import React from 'react';

export function MegaMenu({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="group relative">
      <button className="py-4 font-medium text-slate-300 hover:text-white transition-colors">{label}</button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 p-6">
        {children}
      </div>
    </div>
  );
}
