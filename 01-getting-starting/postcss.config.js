module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.vue', './public/index.html'],
      defaultExtractor: content => content.match(/[A-Zaz0-9-_:/]+/g) || []
    }),
  ],
};
