import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import AccordionRow from '.'

describe('AccordionRow', () => {
  const TestHeading = () => <h4>Test Heading</h4>

  const testProps = {
    title: 'Accordion Row',
    subtitles: ['Accordion Row Subtitle'],
  }

  it('should render', () => {
    render(
      <AccordionRow {...testProps}>
        <TestHeading />
      </AccordionRow>
    )

    const el = screen.getByRole('heading')

    expect(el).toBeInTheDocument()
  })

  it('should render a title', () => {
    render(
      <AccordionRow {...testProps}>
        <TestHeading />
      </AccordionRow>
    )

    const el = screen.getByText('Accordion Row')

    expect(el).toBeInTheDocument()
  })

  it('should render a subtitle when given one string', () => {
    render(
      <AccordionRow {...testProps}>
        <TestHeading />
      </AccordionRow>
    )

    const el = screen.getByText('Accordion Row Subtitle')

    expect(el).toBeInTheDocument()
  })

  it('should render all subtitles when given multiple strings', () => {
    const modifiedTestProps = { ...testProps }
    modifiedTestProps.subtitles = ['Subtitle 1', 'Subtitle 2']

    render(
      <AccordionRow {...modifiedTestProps}>
        <TestHeading />
      </AccordionRow>
    )

    const firstSubtitle = screen.getByText('Subtitle 1')
    const secondSubtitle = screen.getByText('Subtitle 2')

    expect(firstSubtitle).toBeInTheDocument()
    expect(secondSubtitle).toBeInTheDocument()
  })

  it('should display a content panel when the button is clicked and the content panel is not expanded', async () => {
    render(
      <AccordionRow {...testProps}>
        <TestHeading />
      </AccordionRow>
    )

    const el = screen.getByRole('button')

    await userEvent.click(el)
    await screen.findByRole('region')

    const heading = await screen.findByText('Test Heading')

    expect(heading).toBeInTheDocument()
  })

  it('should hide a content panel when the button is clicked and the content panel is expanded', async () => {
    render(
      <AccordionRow {...testProps}>
        <TestHeading />
      </AccordionRow>
    )

    const el = screen.getByRole('button')

    await userEvent.click(el)
    await screen.findByRole('region')

    const heading = await screen.findByText('Test Heading')

    expect(heading).toBeInTheDocument()

    await userEvent.click(el)

    expect(screen.queryByText('Test Heading')).not.toBeInTheDocument()
  })
})
