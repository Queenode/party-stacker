export const calculateCAGR = (beginningValue: number, endingValue: number, years: number): number => Math.pow(endingValue / beginningValue, 1 / years) - 1;
