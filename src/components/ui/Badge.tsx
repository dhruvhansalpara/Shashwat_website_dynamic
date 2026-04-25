import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Reusable Badge component for tags, categories, and highlights.
 * Support different variants and custom styling.
 */

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'glass';
  size?: 'xs' | 'sm' | 'base';
}

export default function Badge({ 
  children, 
  variant = 'primary', 
  size = 'xs',
  className, 
  ...props 
}: BadgeProps) {
  
  const variants = {
    primary: 'bg-brand-primary text-white',
    secondary: 'bg-brand-secondary text-white',
    accent: 'bg-brand-accent text-white',
    outline: 'bg-white/90 border border-gray-100 text-gray-900',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-white',
  };

  const sizes = {
    xs: 'px-3 py-1 text-[10px]',
    sm: 'px-4 py-1.5 text-xs',
    base: 'px-6 py-2 text-sm md:text-base',
  };

  return (
    <span 
      className={cn(
        'inline-block rounded-full font-black uppercase tracking-widest transition-all',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
