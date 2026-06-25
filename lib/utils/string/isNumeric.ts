export const isNumeric = (s: string): boolean => !isNaN(parseFloat(s)) && isFinite(Number(s));
