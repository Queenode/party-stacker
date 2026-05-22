import React from 'react';
import { cn } from '@/lib/utils';

export function PulseCircle({ color = 'orange', className }: { color?: 'orange' | 'green' | 'blue'; className?: string }) {
  const colors = { orange: 'bg-orange-500', green: 'bg-green-500', blue: 'bg-blue-500' };
  return (
    <div className={cn('relative flex h-3 w-3', className)}>
      <span className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', colors[color])} />
      <span className={cn('relative inline-flex rounded-full h-3 w-3', colors[color])} />
    </div>
  );
}
