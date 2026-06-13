export const validateFileExtension = (filename: string, allowed: string[]): boolean => { const ext = filename.split('.').pop()?.toLowerCase() || ''; return allowed.includes(ext); };
