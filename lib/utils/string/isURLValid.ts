export const isURLValid = (url: string): boolean => /^(ftp|http|https):\/\/[^ "]+$/.test(url);
