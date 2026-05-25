import React, { useEffect, useState } from 'react';

export function AnimatedNumber({ value, duration = 1000 }: { value: number; duration?: number }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { clearInterval(timer); setCurrent(value); } else setCurrent(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{current.toLocaleString()}</span>;
}
