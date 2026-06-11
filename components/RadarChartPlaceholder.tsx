import React from 'react';

export function RadarChartPlaceholder() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
        <polygon points="50,10 90,40 75,90 25,90 10,40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <polygon points="50,30 75,50 65,80 35,80 25,50" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" strokeWidth="2" strokeLinejoin="round" />
        {[[50,10], [90,40], [75,90], [25,90], [10,40]].map((p, i) => <line key={i} x1="50" y1="50" x2={p[0]} y2={p[1]} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      </svg>
    </div>
  );
}
