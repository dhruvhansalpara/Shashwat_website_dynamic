import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Standardized Button component with multiple variants.
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-brand-primary/25',
    secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-brand-secondary/25',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/25',
    outline: 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-transparent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
    xl: 'px-10 py-5 text-base',
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'inline-flex items-center justify-center rounded-full font-black uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
