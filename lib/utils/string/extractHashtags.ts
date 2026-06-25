export const extractHashtags = (s: string): string[] => s.match(/#[a-z]+/gi) || [];
