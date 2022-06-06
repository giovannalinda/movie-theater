import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as S from './Login.styled'

export function Login() {
  const [userName, setUserName] = useState(
    localStorage.getItem('username') ?? '',
  )

  const firstLetterName = userName.charAt(0).toUpperCase()

  useEffect(() => {
    localStorage.setItem('username', userName)
  }, [userName])

  return (
    <S.Container>
      <h1>Quem está assistindo?</h1>

      <Link to='/home' title='Ver catálogo'>
        <S.Content>
          <h2>{firstLetterName}</h2>
        </S.Content>
      </Link>
      <input
        type='text'
        placeholder='Seu nome aqui'
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
      />
    </S.Container>
  )
}
