export const encryptData = (data: string): string => { return Buffer.from(data).toString('base64'); // Replace with AES in production };
