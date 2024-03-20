import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlanetList from '.'

describe('PlanetList', () => {
  const testProps = {
    planets: [
      {
        name: 'Planet 1',
        population: 2500000,
      },
      {
        name: 'Planet 2',
        population: 30000000,
      },
      {
        name: 'Planet 3',
        population: 10000,
      },
      {
        name: 'Planet 4',
        population: 2504398,
      },
    ],
    panelId: 'film1',
  }

  it('should render', () => {
    render(<PlanetList {...testProps} />)

    const el = screen.getByRole('table')

    expect(el).toBeInTheDocument()
  })

  it('should render two column headings: Name and Population', () => {
    render(<PlanetList {...testProps} />)

    const elements = ['Name', 'Population'].map((text) =>
      screen.getByText(text)
    )

    expect(elements.length).toEqual(2)
  })
})
