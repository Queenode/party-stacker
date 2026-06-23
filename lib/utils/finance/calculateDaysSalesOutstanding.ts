export const calculateDaysSalesOutstanding = (accountsReceivable: number, totalCreditSales: number, numberOfDays: number): number => (accountsReceivable / totalCreditSales) * numberOfDays;
