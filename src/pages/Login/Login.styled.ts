import { styled } from '../../stitches.config'
import { background } from 'assets'

export const Container = styled('div', {
  backgroundImage: `url(${background})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',

  h1: {
    textAlign: 'center',
    fontWeight: '$regular',
    fontSize: '44px',
    marginBottom: '80px',
  },

  a: {
    color: '$white',
  },

  p: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '20px',
  },
})

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '224px',
  height: '214px',
  borderRadius: '50%',
  border: '5px solid $pink400',
  transition: '0.5s',

  '&:hover': {
    transform: 'translateY(-5px) scale(0.85)',
  },

  h2: {
    fontSize: '80px',
    fontWeight: '$regular',
    opacity: '90%',
  },
})
