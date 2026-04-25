/**
 * Currency Formatting Utilities
 */

/**
 * Formats a number as Indian Rupee (INR) currency string.
 * 
 * @example
 * formatInr(5000) // "₹5,000"
 * 
 * @param amount - The numerical amount to format
 * @returns A string correctly formatted for the Indian locale
 */
export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
