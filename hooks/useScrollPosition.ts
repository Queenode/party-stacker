import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const updatePosition = () => setScrollPos(window.pageYOffset);
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPos;
}
