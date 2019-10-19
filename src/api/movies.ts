export function search(query: string) {
  return fetch(`/api/movies/search?q=${query}`)
}

export function getPopular() {
  return fetch('/api/movies/popular')
}