const multiThemePlugin = require('./multi-theme-plugin.cjs')

module.exports = {
  content: ['./src/**/*.astro'],
  plugins: [multiThemePlugin],
}
