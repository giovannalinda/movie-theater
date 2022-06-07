import { useEffect, useState } from 'react'

import { MovieCard, Header, Recommendation } from 'components'

import { api } from 'services/api'
import { MovieProps } from 'types/Movie'

import * as S from './Home.styled'

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([])

  useEffect(() => {
    api
      .get<MovieProps[]>('/movies')
      .then((response) => {
        setMovies(response.data)
      })
      .catch((err) => {
        console.error('deu erro ' + err)
      })
  }, [])

  return (
    <>
      <Header />

      <main>
        <Recommendation />

        <S.Container>
          {movies.map((movie) => {
            return (
              <ul key={movie.title}>
                <li>
                  <MovieCard title={movie.title} poster={movie.poster} />
                </li>
              </ul>
            )
          })}
        </S.Container>
      </main>
    </>
  )
}
