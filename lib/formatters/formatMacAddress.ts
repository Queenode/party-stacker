export const formatMacAddress = (mac: string) => mac.replace(/[^0-9A-Fa-f]/g, '').toUpperCase().replace(/(.{2})/g, '$1:').slice(0, -1);
