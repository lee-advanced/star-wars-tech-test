import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Section from '.'

describe('Section', () => {
  const testProps = {
    title: 'Title',
    copy: 'Film title',
  }

  it('should render', () => {
    render(<Section {...testProps} />)

    const el = screen.getByRole('heading')

    expect(el).toBeInTheDocument()
  })

  it('should render a category heading', () => {
    render(<Section {...testProps} />)

    const el = screen.getByRole('heading')

    expect(el).toBeInTheDocument()
  })

  it('should render copy', () => {
    render(<Section {...testProps} />)

    const el = screen.getByText('Film title')

    expect(el).toBeInTheDocument()
  })
})
