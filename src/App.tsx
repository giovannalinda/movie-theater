import { globalCss } from '@stitches/react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from 'pages'
import { LOGIN } from 'routes'

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
    width: '100%',
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
