import { useEffect, useRef } from 'react';

export function useTitle(title: string, restoreOnUnmount = false) {
  const prevTitleRef = useRef(typeof document !== 'undefined' ? document.title : '');
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    const prev = prevTitleRef.current;
    return () => {
      if (restoreOnUnmount) document.title = prev;
    };
  }, [restoreOnUnmount]);
}
