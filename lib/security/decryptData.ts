export const decryptData = (data: string): string => { return Buffer.from(data, 'base64').toString('utf-8'); };
