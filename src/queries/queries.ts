import { gql } from '@apollo/client'

export const allFilms = gql`
  query Films {
    allFilms {
      films {
        id
        title
        director
        releaseDate
        openingCrawl
        planetConnection {
          planets {
            name
            population
          }
        }
      }
    }
  }
`

export const filmDetail = gql`
  query FilmDetail($id: ID!) {
    film(id: $id) {
      characterConnection {
        characters {
          name
          species {
            name
          }
        }
      }
      director
      episodeID
      openingCrawl
      planetConnection {
        planets {
          name
          population
          climates
        }
      }
      producers
      releaseDate
      speciesConnection {
        species {
          name
          homeworld {
            name
          }
        }
      }
      starshipConnection {
        starships {
          name
          pilotConnection {
            pilots {
              name
            }
          }
        }
      }
      title
      vehicleConnection {
        vehicles {
          name
          pilotConnection {
            pilots {
              name
            }
          }
        }
      }
    }
  }
`
