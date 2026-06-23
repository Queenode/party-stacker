export const calculateCompoundInterest = (p: number, r: number, n: number, t: number): number => p * Math.pow(1 + (r / n), n * t);
