export const formatCreditCard = (cc: string) => cc.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
