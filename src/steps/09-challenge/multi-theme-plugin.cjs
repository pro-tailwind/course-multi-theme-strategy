const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')

// ------------------------------
// Helpers
// ------------------------------

function getRgbChannels(hex) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// Color themes
// ------------------------------
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

// ------------------------------
// Plugin definition
// ------------------------------
module.exports = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--primary-50': getRgbChannels(themes.base['50']),
        '--primary-100': getRgbChannels(themes.base['100']),
        '--primary-200': getRgbChannels(themes.base['200']),
        '--primary-300': getRgbChannels(themes.base['300']),
        '--primary-400': getRgbChannels(themes.base['400']),
        '--primary-500': getRgbChannels(themes.base['500']),
        '--primary-600': getRgbChannels(themes.base['600']),
        '--primary-700': getRgbChannels(themes.base['700']),
        '--primary-800': getRgbChannels(themes.base['800']),
        '--primary-900': getRgbChannels(themes.base['900']),
      },
    })

    Object.entries(themes).forEach(([key, value]) => {
      addBase({
        [`[data-theme="${key}"]`]: {
          '--primary-50': getRgbChannels(value['50']),
          '--primary-100': getRgbChannels(value['100']),
          '--primary-200': getRgbChannels(value['200']),
          '--primary-300': getRgbChannels(value['300']),
          '--primary-400': getRgbChannels(value['400']),
          '--primary-500': getRgbChannels(value['500']),
          '--primary-600': getRgbChannels(value['600']),
          '--primary-700': getRgbChannels(value['700']),
          '--primary-800': getRgbChannels(value['800']),
          '--primary-900': getRgbChannels(value['900']),
        },
      })
    })
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            50: 'rgb(var(--primary-50) / <alpha-value>)',
            100: 'rgb(var(--primary-100) / <alpha-value>)',
            200: 'rgb(var(--primary-200) / <alpha-value>)',
            300: 'rgb(var(--primary-300) / <alpha-value>)',
            400: 'rgb(var(--primary-400) / <alpha-value>)',
            500: 'rgb(var(--primary-500) / <alpha-value>)',
            600: 'rgb(var(--primary-600) / <alpha-value>)',
            700: 'rgb(var(--primary-700) / <alpha-value>)',
            800: 'rgb(var(--primary-800) / <alpha-value>)',
            900: 'rgb(var(--primary-900) / <alpha-value>)',
          },
        },
      },
    },
  }
)
