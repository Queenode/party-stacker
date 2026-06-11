import React from 'react';

export function SparklineChart({ data, color = '#f97316' }: { data: number[]; color?: string }) {
  const min = Math.min(...data); const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d - min) / range) * 100}`).join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-8 overflow-visible">
      <polyline fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" points={points} className="vector-effect-non-scaling-stroke" />
    </svg>
  );
}
