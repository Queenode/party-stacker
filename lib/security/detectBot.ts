export const detectBot = (userAgent: string): boolean => { return /bot|crawl|spider/i.test(userAgent); };
