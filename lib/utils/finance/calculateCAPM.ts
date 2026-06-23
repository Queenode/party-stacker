export const calculateCAPM = (riskFreeRate: number, beta: number, marketReturn: number): number => riskFreeRate + beta * (marketReturn - riskFreeRate);
