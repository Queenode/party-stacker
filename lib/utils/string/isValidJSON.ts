export const isValidJSON = (s: string): boolean => { try { JSON.parse(s); return true; } catch (e) { return false; } };
