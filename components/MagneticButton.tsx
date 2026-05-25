import React, { useRef, useState } from 'react';

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };
  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
  return (
    <button ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} className="transition-transform duration-100 ease-out">{children}</button>
  );
}
