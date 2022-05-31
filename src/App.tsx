import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '#000000',
    color: '#FFFFFF',
    fontFamily: 'Open Sans',
  },
  button: {
    cursor: 'pointer',
  },
  a: {
    textDecoration: 'none',
  },
  ul: {
    listStyle: 'none',
  },
})

function App() {
  globalStyles()

  return <h1>Hello World! :D</h1>
}

export default App
