export const isPalindrome = (s: string): boolean => { const clean = s.replace(/[^A-Z0-9]/ig, "").toLowerCase(); return clean === clean.split("").reverse().join(""); };
