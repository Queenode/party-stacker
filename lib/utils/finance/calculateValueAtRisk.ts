export const calculateValueAtRisk = (portfolioValue: number, confidenceLevel: number, standardDeviation: number): number => portfolioValue * confidenceLevel * standardDeviation;
