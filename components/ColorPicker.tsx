import React from 'react';
import { cn } from '@/lib/utils';

export function ColorPicker({ colors, selected, onSelect }: { colors: string[]; selected: string; onSelect: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => (
        <button key={c} onClick={() => onSelect(c)} className={cn('w-8 h-8 rounded-full border-2 transition-transform hover:scale-110', selected === c ? 'border-white' : 'border-transparent')} style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}
