import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-theme', false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);
  return [enabled, setEnabledState] as const;
}
