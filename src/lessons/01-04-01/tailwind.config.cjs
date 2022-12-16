/*
  Update the `primary` object below to use
  an `rgb()` color function.

  You can use Tailwind's `<alpha-value>` placeholder
  to compose the opacity into the color:

  ```
  rgb(R G B / <alpha-value>)
  ```
*/

module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
      },
    },
  },
  plugins: [],
}
