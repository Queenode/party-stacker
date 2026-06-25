export const getInitials = (s: string): string => s.split(" ").map(n => n[0]).join("").toUpperCase();
