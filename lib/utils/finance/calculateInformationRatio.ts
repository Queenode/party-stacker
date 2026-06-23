export const calculateInformationRatio = (portfolioReturn: number, benchmarkReturn: number, trackingError: number): number => (portfolioReturn - benchmarkReturn) / trackingError;
