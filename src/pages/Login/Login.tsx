import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './Login.styled'

export function Login() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <S.Container>
      {!loading && (
        <>
          <h1>Quem está assistindo?</h1>

          <Link to='/home' title='Ver catálogo'>
            <S.Content>
              <h2>G</h2>
            </S.Content>
            <p>Giovanna Souza</p>
          </Link>
        </>
      )}

      {loading && <h2>Carregando...</h2>}
    </S.Container>
  )
}
