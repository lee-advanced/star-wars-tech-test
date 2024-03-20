import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Accordion } from '.'

describe('Accordion', () => {
  const TestHeading = () => <h4>Test Heading</h4>

  const testProps = {
    accordionRows: [
      {
        title: 'Row 1',
        subtitles: ['Row 1 subtitle'],
        content: <TestHeading />,
      },
      {
        title: 'Row 2',
        subtitles: ['Row 2 subtitle'],
        content: <TestHeading />,
      },
      {
        title: 'Row 3',
        subtitles: ['Row 3 subtitle'],
        content: <TestHeading />,
      },
    ],
  }

  it("should render a number of <AccordionRow />'s equal to the accordionRows prop length", () => {
    render(<Accordion {...testProps} />)

    const el = screen.getAllByRole('button')

    expect(el.length).toEqual(3)
  })
})
