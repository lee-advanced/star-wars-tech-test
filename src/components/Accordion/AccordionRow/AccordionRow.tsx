'use client'
import { useState, PropsWithChildren } from 'react'

export interface Props {
  title: string
  subtitles?: string[]
  accordionId: string
  id: string
}

const AccordionRow = ({
  title,
  subtitles,
  accordionId,
  id,
  children,
}: PropsWithChildren<Props>) => {
  const [contentVisible, setContentVisible] = useState(false)
  const rowId = `accordion-${accordionId}-row-${id}`

  let renderedSubtitles

  if (subtitles !== undefined) {
    renderedSubtitles = subtitles.map((subtitle, index) => (
      <span
        key={`${rowId}-subtitle-${index}`}
        className="md:after:content-['|'] md:after:mx-3 md:last:after:content-['']"
      >
        {subtitle}
      </span>
    ))
  }

  const onClickHandler = () => {
    setContentVisible(!contentVisible)
  }

  return (
    <>
      <h3 className="h-fit md:h-36 bg-gradient-to-r from-sw-grey-dark to-sw-grey-mid text-white p-6 rounded-2xl">
        <button
          id={`${rowId}-control`}
          type="button"
          aria-expanded={contentVisible}
          aria-controls={`${rowId}-content`}
          onClick={onClickHandler}
          className="flex flex-col sm:items-center md:items-start justify-center h-full w-full gap-y-3"
        >
          <span className="text-4xl mb-3 md:mb-0 font-bold">{title}</span>
          <span className="flex justify-around text-xl text-sw-grey-light">
            {renderedSubtitles}
          </span>
        </button>
      </h3>
      {contentVisible && (
        <div
          id={`${rowId}-content`}
          role="region"
          aria-labelledby={`${rowId}-control`}
          className="w-full h-fit p-3"
        >
          {children}
        </div>
      )}
    </>
  )
}
export default AccordionRow
