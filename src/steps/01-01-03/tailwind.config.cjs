const themes = require('./themes')

module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        base: themes.base,
        rainforest: themes.rainforest,
        candy: themes.candy,
      },
    },
  },
  plugins: [],
}
