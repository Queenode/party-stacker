'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function AnimatedNumber({ value }: { value: number }) {
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
}
