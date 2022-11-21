const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
  // getRgbChannels('#0099aa') => 0 153 170
}

// ------------------------------
// Color themes
// ------------------------------

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

module.exports = plugin(function ({ addBase }) {
  addBase({
    ':root': {
      '--primary-50': '238 242 255',
      '--primary-100': '224 231 255',
      '--primary-200': '208 215 247',
      '--primary-300': '170 185 255',
      '--primary-400': '137 148 255',
      '--primary-500': '107 112 252',
      '--primary-600': '85 79 238',
      '--primary-700': '69 60 205',
      '--primary-800': '56 48 162',
      '--primary-900': '39 33 115',
    },
    '[data-theme="base"]': {
      '--primary-50': '238 242 255',
      '--primary-100': '224 231 255',
      '--primary-200': '208 215 247',
      '--primary-300': '170 185 255',
      '--primary-400': '137 148 255',
      '--primary-500': '107 112 252',
      '--primary-600': '85 79 238',
      '--primary-700': '69 60 205',
      '--primary-800': '56 48 162',
      '--primary-900': '39 33 115',
    },
    '[data-theme="rainforest"]': {
      '--primary-50': '236 253 244',
      '--primary-100': '201 242 222',
      '--primary-200': '157 233 198',
      '--primary-300': '86 208 160',
      '--primary-400': '0 179 128',
      '--primary-500': '0 146 104',
      '--primary-600': '0 121 85',
      '--primary-700': '0 99 68',
      '--primary-800': '0 80 56',
      '--primary-900': '0 52 34',
    },
    '[data-theme="candy"]': {
      '--primary-50': '253 242 248',
      '--primary-100': '247 226 238',
      '--primary-200': '248 204 229',
      '--primary-300': '245 164 208',
      '--primary-400': '242 113 181',
      '--primary-500': '225 61 144',
      '--primary-600': '195 22 103',
      '--primary-700': '161 0 75',
      '--primary-800': '132 0 61',
      '--primary-900': '89 0 40',
    },
  })
})
