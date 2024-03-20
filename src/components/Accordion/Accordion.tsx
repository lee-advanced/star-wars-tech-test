import { v4 as uuid } from 'uuid'
import type { Props as AccordionRowProps } from './AccordionRow'
import AccordionRow from './AccordionRow'

interface AccordionRowType
  extends Omit<AccordionRowProps, 'accordionId' | 'id'> {
  content: React.ReactNode
}

interface Props {
  accordionRows: AccordionRowType[]
}

const Accordion = ({ accordionRows }: Props) => {
  const accordionId = uuid()

  return (
    <div className="bg-sw-red-saturated rounded-2xl p-3 shadow-2xl">
      {accordionRows.map((row, index) => (
        <div
          key={`accordion-${accordionId}-row-${index}`}
          className="mb-3 last:mb-0"
        >
          <AccordionRow
            title={row.title}
            subtitles={row.subtitles}
            accordionId={accordionId}
            id={`${index}`}
          >
            {row.content}
          </AccordionRow>
        </div>
      ))}
    </div>
  )
}

export default Accordion
