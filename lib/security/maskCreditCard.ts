export const maskCreditCard = (cc: string): string => { return cc.slice(0, -4).replace(/./g, '*') + cc.slice(-4); };
