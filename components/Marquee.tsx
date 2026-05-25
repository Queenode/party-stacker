import React from 'react';
import { cn } from '@/lib/utils';

export function Marquee({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('w-full overflow-hidden flex', className)}>
      <div className="flex w-max animate-[marquee_20s_linear_infinite]">{children}</div>
      <div className="flex w-max animate-[marquee_20s_linear_infinite]">{children}</div>
    </div>
  );
}
