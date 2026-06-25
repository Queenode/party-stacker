export const toKebabCase = (s: string): string => s.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
