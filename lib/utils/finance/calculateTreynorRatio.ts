export const calculateTreynorRatio = (portfolioReturn: number, riskFreeRate: number, beta: number): number => (portfolioReturn - riskFreeRate) / beta;
