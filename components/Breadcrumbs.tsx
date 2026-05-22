import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Breadcrumbs({ items, className }: { items: { label: string; href?: string }[]; className?: string }) {
  return (
    <nav className={cn('flex items-center space-x-1 text-sm text-slate-500', className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link> : <span className="text-slate-300 font-medium">{item.label}</span>}
          {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-1" />}
        </div>
      ))}
    </nav>
  );
}
