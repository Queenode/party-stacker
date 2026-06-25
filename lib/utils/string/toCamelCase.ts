export const toCamelCase = (s: string): string => s.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase().replace("-", "").replace("_", ""));
