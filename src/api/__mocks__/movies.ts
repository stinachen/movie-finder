export const search = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => [
      { "popularity": 188.965, "vote_count": 901, "video": false, "poster_path": "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg", "id": 559969, "adult": false, "backdrop_path": "/uLXK1LQM28XovWHPao3ViTeggXA.jpg", "original_language": "en", "original_title": "El Camino: A Breaking Bad Movie", "genre_ids": [80, 18, 53], "title": "El Camino: A Breaking Bad Movie", "vote_average": 7.2, "overview": "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.", "release_date": "2019-10-11" }]
  })
})

export const getPopular = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => [
      { "popularity": 484.099, "vote_count": 3271, "video": false, "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", "id": 475557, "adult": false, "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg", "original_language": "en", "original_title": "Joker", "genre_ids": [80, 18, 53], "title": "Joker", "vote_average": 8.6, "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.", "release_date": "2019-10-04" },
      { "popularity": 255.12, "vote_count": 3017, "video": false, "poster_path": "/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", "id": 420818, "adult": false, "backdrop_path": "/nRXO2SnOA75OsWhNhXstHB8ZmI3.jpg", "original_language": "en", "original_title": "The Lion King", "genre_ids": [12, 16, 18], "title": "The Lion King", "vote_average": 7.1, "overview": "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.", "release_date": "2019-07-19" }
    ]
  });
})