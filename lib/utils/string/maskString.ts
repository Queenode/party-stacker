export const maskString = (s: string, visible: number = 4): string => s.slice(0, -visible).replace(/./g, "*") + s.slice(-visible);
