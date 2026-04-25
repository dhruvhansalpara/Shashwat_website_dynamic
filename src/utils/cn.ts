import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility to merge Tailwind CSS classes using clsx and tailwind-merge.
 * It intelligently handles class conflicts.
 * 
 * @param inputs - Array of class names, objects or conditional classes
 * @returns Cleanly merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
