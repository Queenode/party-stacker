export const calculateSortinoRatio = (portfolioReturn: number, riskFreeRate: number, downsideDeviation: number): number => (portfolioReturn - riskFreeRate) / downsideDeviation;
