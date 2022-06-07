export type GenreResponseProps = {
  id: number
  name: 'comedy' | 'ficção' | 'action' | 'horror' | 'fantasy' | 'animation'
  title: string
  description: string
}

export type MovieProps = {
  title: string
  poster: string
  description?: string
}
