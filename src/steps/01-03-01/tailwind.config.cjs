const themes = {
  base: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#d0d7f7',
    300: '#aab9ff',
    400: '#8994ff',
    500: '#6b70fc',
    600: '#554fee',
    700: '#453ccd',
    800: '#3830a2',
    900: '#272173',
  },
  rainforest: {
    50: '#ecfdf4',
    100: '#c9f2de',
    200: '#9de9c6',
    300: '#56d0a0',
    400: '#00b380',
    500: '#009268',
    600: '#007955',
    700: '#006344',
    800: '#005038',
    900: '#003422',
  },
  candy: {
    50: '#fdf2f8',
    100: '#f7e2ee',
    200: '#f8cce5',
    300: '#f5a4d0',
    400: '#f271b5',
    500: '#e13d90',
    600: '#c31667',
    700: '#a1004b',
    800: '#84003d',
    900: '#590028',
  },
}

/*
  ------------------------------
  2. Extend the `colors` object with a new `primary` key.
  Add shades from `50` to `900` that consume the CSS variables
  you created in the CSS file.

  Again, start with just `500`.
  ------------------------------
*/

module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      colors: {
        base: themes.base,
        rainforest: themes.rainforest,
        candy: themes.candy,
        // primary: {}
      },
    },
  },
  plugins: [],
}
