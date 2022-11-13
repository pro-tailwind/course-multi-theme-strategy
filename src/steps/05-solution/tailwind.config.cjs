const plugin = require('tailwindcss/plugin')

module.exports = {
  content: {
    relative: true,
    files: ['./index.astro'],
  },
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
