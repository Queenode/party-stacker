import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WarningBanner({ message, className }: { message: string; className?: string }) {
  return (
    <div className={cn('flex items-center gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 text-sm', className)}>
      <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
      <p>{message}</p>
    </div>
  );
}
