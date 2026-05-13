'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isUp: boolean;
  };
  className?: string;
}

export function StatsCard({ title, value, description, icon: Icon, trend, className }: StatsCardProps) {
  return (
    <Card className={cn("glass-card overflow-hidden relative group", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
            <Icon className="w-5 h-5 text-orange-500" />
          </div>
          {trend && (
            <div className={cn(
              "text-xs font-bold px-2 py-1 rounded-full",
              trend.isUp ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}>
              {trend.isUp ? "+" : "-"}{trend.value}%
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-black text-white tracking-tight">{value}</h3>
          </div>
          {description && (
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">{description}</p>
          )}
        </div>
      </div>

      {/* Decorative Shimmer */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </Card>
  );
}
