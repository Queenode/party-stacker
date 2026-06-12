import { useState, useCallback } from 'react';

export function useCookie(cookieName: string) {
  const [value, setValue] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
    return match ? match[2] : null;
  });
  const updateCookie = useCallback((newValue: string, days?: number) => {
    setValue(newValue);
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = cookieName + '=' + (newValue || '') + expires + '; path=/';
  }, [cookieName]);
  const deleteCookie = useCallback(() => { updateCookie('', -1); }, [updateCookie]);
  return [value, updateCookie, deleteCookie] as const;
}
