import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FilmInfo from '.'

describe('FilmInfo', () => {
  const testProps = {
    id: 'Filmd id',
    title: 'Film title',
    director: 'Director',
    releaseDate: '10th April 1980',
    openingCrawl: 'Lorem ipsum dolor est',
    planetList: [
      {
        name: 'Planet 1',
        population: 2000000,
      },
      {
        name: 'Planet 2',
        population: 456000,
      },
    ],
    panelId: 'testPanel',
  }

  it('should render', () => {
    render(<FilmInfo {...testProps} />)

    const el = screen.getAllByRole('heading')

    expect(el.length).toBeGreaterThan(0)
  })
})
