export const calculateAmortization = (principal: number, rate: number, periods: number): number => principal * (rate * Math.pow(1 + rate, periods)) / (Math.pow(1 + rate, periods) - 1);
