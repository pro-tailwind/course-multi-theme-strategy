const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.astro'],
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        body: {
          textTransform: 'uppercase',
        },
      })
    }),
  ],
}
