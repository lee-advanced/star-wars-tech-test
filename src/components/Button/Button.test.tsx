import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from '.'

describe('Button', () => {
  it('should render', () => {
    render(<Button>Test button</Button>)

    const el = screen.getByText('Test button')

    expect(el).toBeInTheDocument()
  })

  it('should render a link if asLink is true', () => {
    render(<Button asLink={true}>Test button</Button>)

    const el = screen.getByRole('link')

    expect(el).toBeInTheDocument()
  })

  it('should not render a link if asLink is false', () => {
    render(<Button asLink={false}>Test button</Button>)

    const el = screen.queryByRole('link')

    expect(el).not.toBeInTheDocument()
  })

  it('should execute the provided onClick function when clicked', async () => {
    const testFn = jest.fn(() => {})

    render(<Button onClick={testFn}>Test button</Button>)

    const el = screen.getByRole('button')

    expect(testFn).toHaveBeenCalledTimes(0)

    await userEvent.click(el)

    expect(testFn).toHaveBeenCalledTimes(1)
  })
})
