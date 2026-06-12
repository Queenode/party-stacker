import { useState, useEffect } from 'react';

export function useNetworkState() {
  const [state, setState] = useState({ online: true, downlink: 0, downlinkMax: 0, effectiveType: '', rtt: 0, saveData: false, type: '' });
  useEffect(() => {
    const nav = navigator as any;
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    if (!conn) return;
    const update = () => {
      setState({ online: navigator.onLine, downlink: conn.downlink, downlinkMax: conn.downlinkMax, effectiveType: conn.effectiveType, rtt: conn.rtt, saveData: conn.saveData, type: conn.type });
    };
    update();
    conn.addEventListener('change', update);
    return () => conn.removeEventListener('change', update);
  }, []);
  return state;
}
