import { styled } from '../../stitches.config'

export const Navbar = styled('div', {
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItens: 'center',
  position: 'fixed',
  zIndex: '1',
})

export const ShowSidebar = styled('div', {
  button: {
    position: 'absolute',
    background: 'none',
    border: '0',
    color: '$gray300',
    margin: '20px 0 0 50px',
  },
})
