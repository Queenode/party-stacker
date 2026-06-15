export const formatZipCode = (zip: string) => { const val = zip.replace(/\D/g, ''); return val.length > 5 ? val.replace(/^(\d{5})(\d{4})/, '$1-$2') : val; };
