import { MovieProps } from 'types/Movie'

import * as S from './MovieCard.styled'

export function MovieCard({ title, poster }: MovieProps) {
  return (
    <S.Container>
      <img src={poster} alt={title} />
    </S.Container>
  )
}
