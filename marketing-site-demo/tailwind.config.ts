import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f2f7f4',
          100: '#e0ece6',
          200: '#c2d9cd',
          300: '#9cc3b4',
          500: '#3f8f76',
          600: '#2f7361',
          700: '#255a4d',
          900: '#15302a'
        },
        ink: '#1b2421'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
