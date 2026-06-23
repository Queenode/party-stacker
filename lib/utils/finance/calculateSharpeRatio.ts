export const calculateSharpeRatio = (portfolioReturn: number, riskFreeRate: number, standardDeviation: number): number => (portfolioReturn - riskFreeRate) / standardDeviation;
