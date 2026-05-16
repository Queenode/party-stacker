'use client';

import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VerifiedBadgeProps {
  className?: string;
  showText?: boolean;
}

export function VerifiedBadge({ className, showText = true }: VerifiedBadgeProps) {
  return (
    <div className={cn(
      "flex items-center gap-1.5 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400",
      className
    )}>
      <CheckCircle2 className="w-3 h-3" />
      {showText && <span className="text-[10px] font-black uppercase tracking-tighter">Verified</span>}
    </div>
  );
}
