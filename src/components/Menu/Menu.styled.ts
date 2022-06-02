import { styled } from 'stitches.config'

export const Aside = styled('aside', {
  width: '400px',
  bottom: '0',
  position: 'fixed',
  top: '0',
  left: '0',
  background: '$gray900',

  p: {
    margin: '180px 0 0 70px',
    opacity: '50%',
  },

  button: {
    color: '$gray300',
    margin: '20px 0 0 50px',
  },

  a: {
    marginLeft: '70px',
    color: '$white',
    background: 'linear-gradient(to left, $purple300 2%, $purple600 50%)',
    borderRadius: '14px',
    padding: '10px 30px',
    fontWeight: '$bold',
    transition: '0.8s',

    '&:hover': {
      border: '2px solid $purple600',
      background: 'none',
    },

    '& svg': {
      marginRight: '10px',
    },
  },
})

export const List = styled('ul', {
  padding: '20px',
  margin: '14px 0 70px 50px',
  overflowY: 'scroll',

  li: {
    paddingBottom: '17px',
    transition: '0.5s',
    textAlign: 'left',
    fontSize: '20px',
    cursor: 'pointer',
    color: '$gray300',

    '&:hover': {
      color: '$white',
      paddingLeft: '10px',
    },
  },
})
