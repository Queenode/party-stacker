export const checkSpam = (content: string): boolean => { const spamWords = ['buy', 'cheap', 'click here']; return spamWords.some(word => content.toLowerCase().includes(word)); };
