import { useState, useEffect } from 'react';

export function useBattery() {
  const [state, setState] = useState({ supported: true, loading: true, level: 0, charging: false, chargingTime: 0, dischargingTime: 0 });
  useEffect(() => {
    let mounted = true;
    let battery: any = null;
    const handleChange = () => {
      if (!mounted || !battery) return;
      setState({ supported: true, loading: false, level: battery.level, charging: battery.charging, chargingTime: battery.chargingTime, dischargingTime: battery.dischargingTime });
    };
    (navigator as any).getBattery?.().then((bat: any) => {
      if (!mounted) return;
      battery = bat;
      handleChange();
      bat.addEventListener('levelchange', handleChange);
      bat.addEventListener('chargingchange', handleChange);
      bat.addEventListener('chargingtimechange', handleChange);
      bat.addEventListener('dischargingtimechange', handleChange);
    }).catch(() => {
      if (mounted) setState(s => ({ ...s, supported: false, loading: false }));
    });
    return () => {
      mounted = false;
      if (battery) {
        battery.removeEventListener('levelchange', handleChange);
        battery.removeEventListener('chargingchange', handleChange);
        battery.removeEventListener('chargingtimechange', handleChange);
        battery.removeEventListener('dischargingtimechange', handleChange);
      }
    };
  }, []);
  return state;
}
