export const calculateDaysPayableOutstanding = (accountsPayable: number, cogs: number, numberOfDays: number): number => (accountsPayable / cogs) * numberOfDays;
