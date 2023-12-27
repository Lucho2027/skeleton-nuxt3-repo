const colors = require('tailwindcss/colors');
const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './assets/**/*.{html,js,jsx,ts,tsx,vue}',
    './components/**/*.{html,js,jsx,ts,tsx,vue}',
    './data/**/*.{html,js,jsx,ts,tsx,vue}',
    './layouts/**/*.{html,js,jsx,ts,tsx,vue}',
    './pages/**/*.{html,js,jsx,ts,tsx,vue}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        onPrimary: 'var(--color-onPrimary)',
        onSecondary: 'var(--color-onSecondary)',
        planCardPlus: 'var(--color-planCardPlus)',
        planCardStd: 'var(--color-planCardStd)',
        selected: 'var(--color-selected)',
        gray: colors.gray,
        red: colors.red,
        green: colors.green
      }
    },
    screens: {
      '2xs': '400px',
      xs: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [tailwindForms]
};
