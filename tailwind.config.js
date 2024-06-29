module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#0E1016',
        'dark-gray': '#292929',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
