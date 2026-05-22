import React from 'react';
import { cn } from '@/lib/utils';

export function ProgressRing({ progress, size = 40, stroke = 4, className }: { progress: number; size?: number; stroke?: number; className?: string }) {
  const radius = (size - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className={cn('-rotate-90 transform', className)}>
      <circle 
        className="text-slate-800"
        strokeWidth={stroke}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle 
        className="text-orange-500 transition-all duration-1000 ease-in-out"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
}
