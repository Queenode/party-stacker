export const calculateEBITDA = (netIncome: number, taxes: number, interest: number, depreciation: number, amortization: number): number => netIncome + taxes + interest + depreciation + amortization;
