import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function EmptyStateAction({ icon: Icon, title, description, actionText, onAction, className }: { icon: any; title: string; description: string; actionText: string; onAction: () => void; className?: string }) {
  return (
    <div className={cn('flex flex-col items-center text-center p-8 border border-dashed border-white/10 rounded-2xl bg-white/5', className)}>
      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-slate-400" /></div>
      <h3 className="text-lg font-medium text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-6 max-w-sm">{description}</p>
      <Button onClick={onAction} variant="secondary">{actionText}</Button>
    </div>
  );
}
