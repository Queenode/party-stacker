export const validateStxAddress = (address: string): boolean => { return address.length > 30 && (address.startsWith('SP') || address.startsWith('ST')); };
