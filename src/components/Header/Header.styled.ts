import { styled } from 'stitches.config'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItens: 'center',
  position: 'fixed',
  background: '$black',
  left: 0,
  right: 0,
  height: '64px',
  zIndex: 1,
})

export const userNameWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  h3: {
    marginRight: '48px',
    fontSize: '14px',
  },
})

export const Content = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '3px solid $pink400',
  borderRadius: '50%',
  width: '38px',
  height: '38px',
  marginRight: '14px',

  h2: {
    fontSize: '18px',
  },
})
