export const validateSignature = (sig: string, payload: string): boolean => { return sig.length === 128 && payload.length > 0; };
