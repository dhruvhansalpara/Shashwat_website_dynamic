/**
 * Date manipulation and formatting utilities for form inputs and displays.
 */

/**
 * Returns today's date formatted as YYYY-MM-DD for HTML date inputs.
 */
export function getTodayInputDate(): string {
  const now = new Date();
  const tzOffsetMs = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() - tzOffsetMs).toISOString().split('T')[0];
}

/**
 * Formats a Date object as YYYY-MM-DD for HTML date inputs.
 */
export function formatDateForInput(date: Date): string {
  const tzOffsetMs = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() - tzOffsetMs).toISOString().split('T')[0];
}

/**
 * Parses a YYYY-MM-DD string into a standard Date object.
 * Returns null if the value is missing or invalid.
 */
export function parseInputDate(value?: string): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}
