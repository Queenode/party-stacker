import { useState, useEffect } from 'react';

export function useIdle(ms: number = 60000) {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    let timeoutId: any;
    const handleEvent = () => {
      setIsIdle(false);
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setIsIdle(true), ms);
    };
    handleEvent();
    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('keydown', handleEvent);
    window.addEventListener('scroll', handleEvent);
    return () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('scroll', handleEvent);
      window.clearTimeout(timeoutId);
    };
  }, [ms]);
  return isIdle;
}
