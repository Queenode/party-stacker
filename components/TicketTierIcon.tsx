'use client';

import { Ticket, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TicketTierIconProps {
  tier: 'general' | 'vip' | 'backstage';
  className?: string;
}

export function TicketTierIcon({ tier, className }: TicketTierIconProps) {
  const configs = {
    general: { icon: Ticket, color: "text-slate-400" },
    vip: { icon: Star, color: "text-yellow-500" },
    backstage: { icon: ShieldCheck, color: "text-orange-500" }
  };

  const { icon: Icon, color } = configs[tier];

  return (
    <div className={cn("flex items-center justify-center", color, className)}>
      <Icon className="w-full h-full" />
    </div>
  );
}
