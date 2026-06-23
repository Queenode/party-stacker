export const calculatePresentValue = (futureValue: number, rate: number, periods: number): number => futureValue / Math.pow(1 + rate, periods);
