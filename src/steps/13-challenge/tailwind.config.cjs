const multiThemePlugin = require('./multi-theme-plugin.cjs')

module.exports = {
  content: ['./src/**/*.astro'],
  /*
  ------------------------------
  TODO:
  Import the themes from `./themes.json` and pass those
  as an option to the multi-theme plugin.
  ------------------------------
*/
  plugins: [multiThemePlugin],
}
