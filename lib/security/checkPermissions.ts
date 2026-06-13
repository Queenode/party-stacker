export const checkPermissions = (userRole: string, requiredRole: string): boolean => { const roles = ['user', 'moderator', 'admin']; return roles.indexOf(userRole) >= roles.indexOf(requiredRole); };
