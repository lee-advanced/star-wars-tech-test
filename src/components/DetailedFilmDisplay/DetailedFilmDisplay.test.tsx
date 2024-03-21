import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DetailedFilmDisplay from '.'

describe('DetailedFilmDisplay', () => {
  const testProps = {
    filmData: {
      title: 'Detailed Heading',
      episodeID: '4',
      director: 'Director',
      producers: ['david', 'john', 'rachel'],
      releaseDate: '11-11-2011',
      openingCrawl: 'Opening crawl text',
      characters: [
        {
          name: 'character 1',
          species: {
            name: 'species 1',
          },
        },
      ],
      planets: [
        {
          name: 'planet 1',
          population: 250000,
          climates: ['arid'],
        },
      ],
      species: [
        {
          name: 'species 1',
          homeworld: {
            name: 'planet 1',
          },
        },
      ],
      starships: [
        {
          name: 'starship 1',
          pilotConnection: {
            pilots: [
              {
                name: 'pilot 1',
              },
            ],
          },
        },
      ],
      vehicles: [
        {
          name: 'vehicle 1',
          pilotConnection: {
            pilots: [
              {
                name: 'pilot 1',
              },
            ],
          },
        },
      ],
    },
  }

  it('should render and display heading', () => {
    render(<DetailedFilmDisplay {...testProps} />)

    const el = screen.getByText('Detailed Heading')

    expect(el).toBeInTheDocument()
  })
})
