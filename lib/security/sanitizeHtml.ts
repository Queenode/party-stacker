export const sanitizeHtml = (html: string): string => { return html.replace(/</g, "&lt;").replace(/>/g, "&gt;"); };
