import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#FF6B6B',      // Vibrant Red
        'brand-secondary': '#4ECDC4',    // Turquoise
        'brand-accent': '#FFE66D',       // Golden Yellow
        'brand-dark': '#2C3E50',         // Deep Blue-Gray
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
