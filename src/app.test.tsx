jest.mock('./api/movies')
import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react'
import App from './app';
import { getPopular, search } from './api/movies'


beforeEach(function () {
  jest.useFakeTimers()
  jest.runAllTimers()
});

it('renders the popular movies', async () => {
  const { getByTestId } = render(<App />)
  await Promise.resolve()
  await wait(() => {
    expect(getPopular).toHaveBeenCalled()
    expect(getByTestId('movies-grid').childNodes).toHaveLength(2)
  })
})

it('searches movies', async () => {
  const { getByAltText, getByPlaceholderText, getByTestId } = render(<App />)
  await Promise.resolve()
  await wait(() => {
    fireEvent.change(getByPlaceholderText('Search for a movie'), { target: { value: 'camino' } })
    fireEvent.click(getByTestId('search-button'))
  })
  await Promise.resolve()
  expect(search).toHaveBeenCalled()
  await Promise.resolve()
  await wait(() => {
    expect(getByTestId('movies-grid').childNodes).toHaveLength(1)
    expect(getByAltText('El Camino: A Breaking Bad Movie')).toBeDefined()
  })
})

it('shows details of a movie', async () => {
  const { getByAltText, getByTestId } = render(<App />)
  await Promise.resolve()
  await wait(() => {
    fireEvent.click(getByAltText('Joker'))
  })
  expect(getByTestId('movie-title-header')).toBeDefined()
})

it('returns to popular movies', async () => {
  const { getByAltText, getByTestId } = render(<App />)
  await Promise.resolve()
  await wait(() => {
    fireEvent.click(getByAltText('Joker'))
    fireEvent.click(getByTestId('back-link'))
  })
  expect(getByTestId('movies-grid').childNodes).toHaveLength(2)
})
