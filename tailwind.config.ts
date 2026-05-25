import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coastal: {
          50: '#f8fafb',
          100: '#f0f5f7',
          200: '#dce8ed',
          300: '#c7dce4',
          400: '#5eb3cc',
          500: '#4a9bb8',
          600: '#2b7fa0',
          700: '#1f5f7a',
          800: '#154455',
          900: '#0f2f3a',
        },
        sand: '#f8fafb',
        coral: '#d97766',
        sage: '#2ba89f',
      },
      boxShadow: {
        soft: '0 8px 32px rgba(75, 155, 184, 0.1)',
        card: '0 4px 16px rgba(75, 155, 184, 0.08)',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
