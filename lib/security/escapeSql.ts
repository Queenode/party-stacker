export const escapeSql = (query: string): string => { return query.replace(/'/g, "''"); };
