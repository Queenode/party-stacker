export const stripHTML = (s: string): string => s.replace(/<[^>]*>?/gm, "");
