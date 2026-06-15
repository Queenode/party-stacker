export const formatInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();
