import { background } from 'assets'
import { styled } from '../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '10px',
  textAlign: 'center',
  backgroundImage: `url(${background})`,
  height: '100vh',

  h1: {
    marginBottom: '8px',
  },

  p: {
    opacity: '70%',
  },

  a: {
    padding: '10px 50px',
    border: '1px solid $pink400',
    color: '$pink400',
    marginTop: '18px',
    transition: '0.8s',
    borderRadius: '4px',

    '&:hover': {
      background: '$pink400',
      color: '$white',
    },
  },
})
