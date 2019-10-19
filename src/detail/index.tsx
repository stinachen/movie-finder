import React from 'react'
import { Movie } from '../app'

type Props = {
  movie: Movie
}
export default function MovieDetail(props: Props) {
  const { movie } = props
  const url = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  return (
    <>
      <h2 data-testid='movie-title-header'>{movie.title}</h2>
      <img style={{ height: '60vh' }} alt={movie.title} src={url} />
      <p>{movie.overview}</p>
    </>
  )

}