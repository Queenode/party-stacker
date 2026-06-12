import { useState, useCallback } from 'react';

export function useHistory<T>(initialState: T) {
  const [state, setState] = useState(initialState);
  const [history, setHistory] = useState<T[]>([initialState]);
  const [pointer, setPointer] = useState(0);
  const set = useCallback((val: T | ((curr: T) => T)) => {
    const resolved = typeof val === 'function' ? (val as Function)(state) : val;
    if (history[pointer] !== resolved) {
      const newHistory = history.slice(0, pointer + 1);
      newHistory.push(resolved);
      setHistory(newHistory);
      setPointer(newHistory.length - 1);
      setState(resolved);
    }
  }, [history, pointer, state]);
  const undo = useCallback(() => {
    if (pointer > 0) {
      setPointer(p => p - 1);
      setState(history[pointer - 1]);
    }
  }, [history, pointer]);
  const redo = useCallback(() => {
    if (pointer < history.length - 1) {
      setPointer(p => p + 1);
      setState(history[pointer + 1]);
    }
  }, [history, pointer]);
  return { state, set, undo, redo, canUndo: pointer > 0, canRedo: pointer < history.length - 1 };
}
