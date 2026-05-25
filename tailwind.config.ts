import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f7f2ed',
        warm: '#9f7d64',
        slate: '#324048',
        soft: '#e8e3dd',
        accent: '#b5835a',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(50, 64, 72, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
