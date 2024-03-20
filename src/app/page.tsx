import { Accordion } from '@/components'

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
      subtitles: ['Row 3 subtitle', 'Row 3 subtitle'],
      content: <TestHeading />,
    },
  ],
}

export default function Home() {
  return <Accordion {...testProps} />
}
