import { styled } from 'stitches.config'

export const Container = styled('div', {
  img: {
    width: '100%',
    height: '700px',
    objectFit: 'cover',
  },
})

export const LogoMovie = styled('div', {
  img: {
    display: 'flex',
    width: '400px',
    height: '100px',
    marginTop: '-500px',
    marginLeft: '30px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
})

export const InfoMovie = styled('div', {
  strong: {
    marginLeft: '50px',
  },

  p: {
    marginLeft: '50px',
    marginBottom: '20px',
  },

  a: {
    background: 'linear-gradient(to left, $white 5%, $yellow400 50%)',
    borderRadius: '50%',
    padding: '14px',
    marginLeft: '50px',
    marginRight: '20px',
    transition: '0.8s',

    '&:hover': {
      opacity: '80%',
    },

    img: {
      width: '25px',
      height: '25px',
      paddingTop: '8px',
    },
  },

  button: {
    background: '$gray600',
    width: '144px',
    height: '44px',
    borderRadius: '20px',
    border: 'none',
    color: '$white',
    fontWeight: '$bold',
    transition: '0.8s',

    '&:hover': {
      background: '$yellow400',
    },
  },
})
