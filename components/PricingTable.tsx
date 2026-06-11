import React from 'react';

export function PricingTable({ tiers }: { tiers: { name: string; price: string; features: string[] }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((tier, i) => (
        <div key={i} className="p-6 bg-slate-900 border border-white/10 rounded-2xl flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <div className="text-3xl font-black text-orange-500 mb-6">{tier.price}</div>
          <ul className="space-y-3 mb-8 flex-1">
            {tier.features.map((f, j) => <li key={j} className="text-slate-300 text-sm flex items-center before:content-['✓'] before:text-green-500 before:mr-2">{f}</li>)}
          </ul>
          <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium">Select Plan</button>
        </div>
      ))}
    </div>
  );
}
