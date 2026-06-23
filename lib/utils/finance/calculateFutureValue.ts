export const calculateFutureValue = (presentValue: number, rate: number, periods: number): number => presentValue * Math.pow(1 + rate, periods);
