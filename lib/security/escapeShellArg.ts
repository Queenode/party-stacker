export const escapeShellArg = (arg: string): string => { return "'" + arg.replace(/'/g, "'\''") + "'"; };
