export const calculateEPS = (netIncome: number, preferredDividends: number, outstandingShares: number): number => (netIncome - preferredDividends) / outstandingShares;
