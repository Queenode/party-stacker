export const calculateAlpha = (portfolioReturn: number, benchmarkReturn: number, beta: number): number => portfolioReturn - (benchmarkReturn * beta);
