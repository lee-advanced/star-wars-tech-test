import { v4 as uuid } from 'uuid'
import type { Props as AccordionRowProps } from './AccordionRow'
import AccordionRow from './AccordionRow'

interface AccordionRowType extends AccordionRowProps {
  content: React.ReactNode
}

interface Props {
  accordionRows: AccordionRowType[]
}

const Accordion = ({ accordionRows }: Props) => {
  const accordionId = uuid()

  return (
    <div>
      {accordionRows.map((row, index) => (
        <AccordionRow
          key={`accordion-${accordionId}-row-${index}`}
          title={row.title}
          subtitles={row.subtitles}
        >
          {row.content}
        </AccordionRow>
      ))}
    </div>
  )
}

export default Accordion
