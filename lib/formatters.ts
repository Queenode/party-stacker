/**
 * Formats a timestamp into a human-readable date string.
 * Example: Jan 12, 2026 • 8:00 PM
 */
export function formatEventDate(timestamp: number): string {
  const date = new Date(timestamp);
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }) + ' • ' + date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Formats STX amounts for display.
 */
export function formatSTX(microSTX: number): string {
  return (microSTX / 1_000_000).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
  }) + ' STX';
}
