import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CountdownTimer({ targetDate, className }: { targetDate: Date; className?: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  
  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60)
        });
      }
    }, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn('flex gap-4', className)}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span className="text-xl font-mono font-bold text-white">{value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">{unit}</span>
        </div>
      ))}
    </div>
  );
}
