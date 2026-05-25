import React from 'react';
import { cn } from '@/lib/utils';

export function StatusIndicator({ status }: { status: 'online' | 'offline' | 'busy' }) {
  const colors = {
    online: 'bg-green-500',
    offline: 'bg-slate-500',
    busy: 'bg-red-500'
  };
  return (
    <div className="relative flex h-3 w-3">
      {status === 'online' && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
      <span className={cn('relative inline-flex rounded-full h-3 w-3', colors[status])}></span>
    </div>
  );
}
