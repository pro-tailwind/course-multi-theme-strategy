import colors from 'tailwindcss/colors'
import resolveConfig from 'tailwindcss/resolveConfig'

export function getCustomColors(config) {
  const themeColors = resolveConfig(config).theme.colors
  const defaultColorNames = Object.keys(colors)

  const newColors = Object.fromEntries(
    Object.entries(themeColors).filter(([color, value]) => !defaultColorNames.includes(color))
  )

  return newColors
}
