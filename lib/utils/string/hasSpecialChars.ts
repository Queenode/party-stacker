export const hasSpecialChars = (s: string): boolean => /[!@#$%^&*()_+\-=\[\]{};\x27:"\\|,.<>\/?]+/.test(s);
