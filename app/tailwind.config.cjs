/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    ".index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': {transform: 'translateY(-5%)', opacity: '0%'},
          '100%': {transform: 'none', opacity: '100%'}
        }
    },
    colors: {
      'ghost-white': '#F8F7FB',
      'eerie-black': '#262626',
      'robin-egg-blue': '#3CBFBE',
      'gold': '#F7D019'
    }
  },
  plugins: [],
}}
