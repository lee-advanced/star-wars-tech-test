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
        className="after:content-['|'] after:mx-3 last:after:content-['']"
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
      <h3 className="h-24 border border-black bg-gradient-to-r from-sw-grey-dark to-sw-grey-mid text-white p-3">
        <button
          id={`${rowId}-control`}
          type="button"
          aria-expanded={contentVisible}
          aria-controls={`${rowId}-content`}
          onClick={onClickHandler}
          className="flex flex-col sm:items-center md:items-start h-full w-full"
        >
          <span className="text-4xl">{title}</span>
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
          className="p-3 bg-sw-red-saturated"
        >
          {children}
        </div>
      )}
    </>
  )
}
export default AccordionRow
