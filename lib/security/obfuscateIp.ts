export const obfuscateIp = (ip: string): string => { const parts = ip.split('.'); return parts.slice(0, 3).join('.') + '.xxx'; };
