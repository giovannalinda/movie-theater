import { Link } from 'react-router-dom'

import * as S from './NotFound.styled'

export function NotFound() {
  return (
    <S.Container>
      <h1>Ops! Parece que você está perdido.</h1>
      <p>
        É provável que você tenha escrito algo errado, você pode verificar a
        URL?
      </p>
      <Link to='/home'>Voltar</Link>
    </S.Container>
  )
}
