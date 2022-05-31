import { createStitches } from '@stitches/react'

export const { styled, theme, css, config, globalCss } = createStitches({
  theme: {
    fonts: {
      family: 'Open Sans',
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray300: '#C8C8C8',
      blue900: '#170352',
      purple600: '#4B15C6',
      purple900: '#1D0437',
      pink400: '#EA58CB',
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
})
