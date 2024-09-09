/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      gray: {
        100: '#FAFAF9',
        200: '#979797',
        300: '#696969',
        400: '#404040',
        500: '#2E2E2E',
        600: '#1A1A1A',
        700: '#141414',
      },
    },
  },
  plugins: [],
};
