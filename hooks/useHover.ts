import { useState, useEffect, RefObject } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>(elementRef: RefObject<T | null>): boolean {
  const [value, setValue] = useState(false);
  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);
  useEffect(() => {
    const node = elementRef?.current;
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [elementRef]);
  return value;
}
