import React from 'react';

export function HeatMapGrid({ data }: { data: number[] }) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex flex-wrap gap-1">
      {data.map((val, i) => {
        const intensity = val / max;
        return (
          <div key={i} className="w-3 h-3 rounded-sm bg-orange-500" style={{ opacity: intensity > 0 ? Math.max(0.2, intensity) : 0.05 }} title={`Value: ${val}`} />
        );
      })}
    </div>
  );
}
