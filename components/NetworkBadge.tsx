import React from 'react';
import { cn } from '@/lib/utils';

export function NetworkBadge({ network, className }: { network: 'mainnet' | 'testnet'; className?: string }) {
  const isMainnet = network === 'mainnet';
  return (
    <div className={cn('inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-medium uppercase tracking-wider', className)}>
      <div className={cn('w-1.5 h-1.5 rounded-full', isMainnet ? 'bg-orange-500' : 'bg-blue-500')} />
      <span className="text-slate-300">{isMainnet ? 'Stacks Mainnet' : 'Testnet'}</span>
    </div>
  );
}
