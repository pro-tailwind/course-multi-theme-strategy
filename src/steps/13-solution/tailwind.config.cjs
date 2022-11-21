const multiThemePlugin = require('./multi-theme-plugin.cjs')
const themes = require('./themes.json')

module.exports = {
  content: ['./src/**/*.astro'],
  plugins: [multiThemePlugin({ colorThemes: themes })],
}
