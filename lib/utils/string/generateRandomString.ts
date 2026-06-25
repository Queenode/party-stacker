export const generateRandomString = (len: number): string => Math.random().toString(36).substring(2, 2 + len);
