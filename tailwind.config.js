module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [],
};
