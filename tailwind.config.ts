import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8f2',
          100: '#e7f1df',
          500: '#4f7d2c',
          700: '#31551c',
          900: '#1f3211',
        },
        accent: '#c8a74e',
      },
      boxShadow: {
        premium: '0 18px 50px -20px rgba(31,50,17,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config
