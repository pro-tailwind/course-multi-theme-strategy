const multiThemePlugin = require('./multi-theme-plugin.cjs')
const themes = require('./themes.json')

module.exports = {
  content: ['./src/**/*.astro'],
  // Pass the themes to the plugin below
  plugins: [
    multiThemePlugin({
      colorThemes: themes,
    }),
  ],
}
