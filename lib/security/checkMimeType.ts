export const checkMimeType = (mime: string): boolean => { const valid = ['image/jpeg', 'image/png', 'application/pdf']; return valid.includes(mime); };
