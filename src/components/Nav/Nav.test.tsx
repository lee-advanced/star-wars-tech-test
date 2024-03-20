import { render, screen } from '@testing-library/react'
import Nav from '.'

describe('Nav', () => {
  const testProps = {
    links: [
      {
        text: 'home',
        href: '/',
      },
      {
        text: 'films',
        href: '/films',
      },
      {
        text: 'directors',
        href: '/directors',
      },
      {
        text: 'characters',
        href: '/characters',
      },
    ],
  }

  it('should render', () => {
    render(<Nav {...testProps} />)

    const el = screen.getByRole('navigation')

    expect(el).toBeInTheDocument()
  })
})
