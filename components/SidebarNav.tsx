import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function SidebarNav({ items, activePath }: { items: { label: string; href: string; icon: React.ReactNode }[]; activePath: string }) {
  return (
    <nav className="flex flex-col gap-1">
      {items.map((item, i) => (
        <Link key={i} href={item.href} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors', activePath === item.href ? 'bg-orange-500/10 text-orange-500' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5')}>
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
