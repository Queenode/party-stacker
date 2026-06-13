import { randomBytes } from 'crypto';
export const generateRandomSalt = (length = 16): string => { return randomBytes(length).toString('hex'); };
