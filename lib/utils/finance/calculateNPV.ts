export const calculateNPV = (rate: number, cashFlows: number[]): number => cashFlows.reduce((acc, val, i) => acc + val / Math.pow(1 + rate, i), 0);
