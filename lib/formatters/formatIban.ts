export const formatIban = (iban: string) => iban.replace(/[^A-Z0-9]/gi, '').toUpperCase().replace(/(.{4})/g, '$1 ').trim();
