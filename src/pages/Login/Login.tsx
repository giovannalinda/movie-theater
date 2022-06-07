import { useUserName } from 'hooks/useUserName'

import { Link } from 'react-router-dom'

import * as S from './Login.styled'

export function Login() {
  const { userName, firstLetterName, setUserName } = useUserName()

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
