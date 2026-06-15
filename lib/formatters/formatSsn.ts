export const formatSsn = (ssn: string) => { const val = ssn.replace(/\D/g, ''); return val.replace(/^(\d{3})(\d{2})(\d{4})$/, '$1-$2-$3'); };
