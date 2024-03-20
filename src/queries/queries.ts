import { gql } from '@apollo/client'

export const allFilms = gql`
  query Films {
    allFilms {
      films {
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
