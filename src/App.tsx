import React, { useState } from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import styled from '@emotion/styled'
import useAsyncEffect from 'use-async-effect'

import SearchBar from './search-bar'
import MovieDetail from './detail'

import { search, getPopular } from './api/movies'

const Wrapper = styled.div`
  color: #0E1326;
  padding: 6vw;

  h2 {
    color: #2B375D;
  }

  p {
    color: #794247;
  }
`

const Container = styled.div`
  align-items: center;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vh;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 16vw 16vw 16vw 16vw;
  grid-gap: 2vw;

  img {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
      transition: opacity .5s ease-out;
    }
  }
`

const BackTo = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  margin-top: 2vh;

  &:hover {
    color: #A6787A;
  }

  svg {
    margin-right: 1vw;
  }
`

export type Movie = {
  backdrop_path: string
  poster_path: string
  id: number
  overview: string
  title: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>()
  const [searchedMovies, setSearchedMovies] = useState<Movie[] | null>()

  const backTo = () => {
    if (selectedMovie) {
      setSelectedMovie(null)
    } else if (searchedMovies) {
      setSearchedMovies(null)
    }
  }

  const searchMovies = async (query: string) => {
    setSelectedMovie(null)
    const response = await search(query)
    const body = await response.json()
    setSearchedMovies(body)
  }

  useAsyncEffect(async () => {
    const response = await getPopular()
    const body = await response.json()
    setMovies(body)
  }, [])

  return (
    <Wrapper>
      <Container>
        <h1>Movie Finder</h1>
        <SearchBar onSearch={searchMovies} />
        <MoviesContainer>
          {(selectedMovie || searchedMovies) &&
            <BackTo data-testid='back-link' onClick={() => backTo()}><MdKeyboardBackspace />Go back</BackTo>}
          {selectedMovie ?
            <MovieDetail movie={selectedMovie} /> :
            <>
              <h2>{searchedMovies ? 'Search results' : 'Popular movies'}</h2>
              <p>Click poster for details</p>
              <Grid data-testid='movies-grid'>
                {(searchedMovies || movies).map(movie => {
                  return (
                    <img
                      alt={movie.title}
                      key={movie.id}
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      onClick={() => { setSelectedMovie(movie) }}
                    />
                  )
                })}
              </Grid>
            </>}
        </MoviesContainer>
      </Container>
    </Wrapper>
  );
}

