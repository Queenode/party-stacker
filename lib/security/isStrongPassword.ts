export const isStrongPassword = (pwd: string): boolean => { return pwd.length >= 8 && /[A-Z]/.test(pwd) && /[0-9]/.test(pwd); };
