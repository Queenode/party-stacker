import React from 'react';
import { cn } from '@/lib/utils';

export function PageHeader({ title, description, className }: { title: string; description?: string; className?: string }) {
  return (
    <div className={cn('space-y-2 mb-8', className)}>
      <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
      {description && <p className="text-slate-400">{description}</p>}
    </div>
  );
}
