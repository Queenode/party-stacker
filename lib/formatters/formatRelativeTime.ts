export const formatRelativeTime = (val: number, unit: Intl.RelativeTimeFormatUnit) => new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(val, unit);
