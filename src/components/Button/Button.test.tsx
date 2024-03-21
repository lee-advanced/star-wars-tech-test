import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

describe('Button', () => {
  const testProps = {
    asLink: false,
  }

  it('should render', () => {
    render(<Button {...testProps}>Test button</Button>)

    const el = screen.getByText('Test button')

    expect(el).toBeInTheDocument()
  })

  it('should render a link if asLink is true', () => {
    const modifiedTestProps = { ...testProps, asLink: true }

    render(<Button {...modifiedTestProps}>Test button</Button>)

    const el = screen.getByRole('link')

    expect(el).toBeInTheDocument()
  })

  it('should not render a link if asLink is false', () => {
    render(<Button {...testProps}>Test button</Button>)

    const el = screen.queryByRole('link')

    expect(el).not.toBeInTheDocument()
  })
})
