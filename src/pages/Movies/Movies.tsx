import { useParams } from 'react-router-dom'

export function Movies() {
  const { genreId } = useParams()

  return (
    <>
      <h1>{genreId}</h1>
    </>
  )
}
