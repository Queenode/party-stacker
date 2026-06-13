export const validateJson = (jsonStr: string): boolean => { try { JSON.parse(jsonStr); return true; } catch { return false; } };
