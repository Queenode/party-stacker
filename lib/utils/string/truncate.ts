export const truncate = (s: string, max: number): string => s.length > max ? s.substring(0, max) + "..." : s;
