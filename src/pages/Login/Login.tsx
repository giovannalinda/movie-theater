import { Link } from 'react-router-dom'
import * as S from './Login.styled'

export function Login() {
  return (
    <S.Container>
      <h1>Quem está assistindo?</h1>

      <Link to='/home' title='Ver catálogo'>
        <S.Content>
          <h2>G</h2>
        </S.Content>
        <p>Giovanna Souza</p>
      </Link>
    </S.Container>
  )
}
