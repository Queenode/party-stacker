import { useEffect } from 'react';

export function usePageLeave(onPageLeave: () => void, args: any[] = []) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      event = event || (window.event as MouseEvent);
      const from = event.relatedTarget || event.toElement;
      if (!from || (from as any).nodeName === 'HTML') {
        onPageLeave();
      }
    };
    document.addEventListener('mouseout', handler);
    return () => document.removeEventListener('mouseout', handler);
  }, args);
}
