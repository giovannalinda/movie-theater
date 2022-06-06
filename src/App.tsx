import { globalCss } from './stitches.config'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, Login, Movies, NotFound } from 'pages'
import { HOME, LOGIN } from 'routes'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$black',
    color: '$white',
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
        <Route path={HOME} element={<Home />} />
        <Route path='/movies/:genreId' element={<Movies />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
