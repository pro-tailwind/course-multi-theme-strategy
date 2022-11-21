const multiThemePlugin = require('./multi-theme-plugin.cjs')

/*
  ------------------------------
  TODO:
  Offload the responsibility of extending the theme 
  to the plugin itself.
  ------------------------------
*/

module.exports = {
  content: ['./src/**/*.astro'],
  plugins: [multiThemePlugin],
}
