import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  overflowX: 'scroll',
  paddingTop: '1rem',
  marginLeft: '50px',
  marginBottom: '18px',
  scrollBehavior: 'smooth',

  '&::-webkit-scrollbar': {
    height: '7px',
    borderRadius: '5px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$gray600',
  },

  ul: {
    marginTop: '12rem',
  },

  li: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '8px',
  },
})
