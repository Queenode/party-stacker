export const preventXss = (str: string): string => { return str.replace(/javascript:/gi, ''); };
