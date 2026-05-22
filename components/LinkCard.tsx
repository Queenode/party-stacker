import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export function LinkCard({ href, title, description, className }: { href: string; title: string; description: string; className?: string }) {
  return (
    <Link href={href} className={cn('block p-4 rounded-xl border border-white/5 bg-slate-900/50 hover:bg-slate-800 transition-colors group', className)}>
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-medium text-white mb-1 group-hover:text-orange-400 transition-colors">{title}</h4>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
