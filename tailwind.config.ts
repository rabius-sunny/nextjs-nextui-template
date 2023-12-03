import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|input).js',
  ],
  theme: {
    colors: {
      primary: colors.red[500],
      secondary: colors.indigo[500],
      success: colors.emerald[400],
      dark: colors.slate[700],
      slate: colors.slate,
      gray: colors.gray,
      neutral: colors.neutral,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      pink: colors.pink,
      red: colors.red,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [nextui()],
}

export default config
