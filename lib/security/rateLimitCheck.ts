export const rateLimitCheck = (ip: string, limits: Record<string, number>): boolean => { const attempts = limits[ip] || 0; return attempts < 5; };
