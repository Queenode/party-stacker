import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn('bg-slate-900 flex items-center justify-center text-slate-700', className)}>
      <ImageIcon className="w-1/4 h-1/4 opacity-50" />
    </div>
  );
}
