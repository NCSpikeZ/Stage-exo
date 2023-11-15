/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }),
    },
  },
  variants: {},
  plugins: [],
};

  