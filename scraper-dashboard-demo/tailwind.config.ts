import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          400: '#6c93ff',
          500: '#3f6cff',
          600: '#2b50e6',
          700: '#2240b4'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
