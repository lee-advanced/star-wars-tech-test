'use client'
import { useState, PropsWithChildren } from 'react'

import { v4 as uuid } from 'uuid'

export interface Props {
  title: string
  subtitles?: string[]
}

const AccordionRow = ({
  title,
  subtitles,
  children,
}: PropsWithChildren<Props>) => {
  const [contentVisible, setContentVisible] = useState(false)
  const rowId = uuid()

  let renderedSubtitles

  if (subtitles !== undefined) {
    renderedSubtitles = subtitles.map((subtitle) => (
      <span key={`subtitle-${uuid()}`}>{subtitle}</span>
    ))
  }

  const onClickHandler = () => {
    setContentVisible(!contentVisible)
  }

  return (
    <>
      <h3>
        <button
          id={`accordion-row-${rowId}-control`}
          type="button"
          aria-expanded={contentVisible}
          aria-controls={`accordion-row-${rowId}-content`}
          onClick={onClickHandler}
        >
          <span>{title}</span>
          {renderedSubtitles}
        </button>
      </h3>
      {contentVisible && (
        <div
          id={`accordion-row-${rowId}-content`}
          role="region"
          aria-labelledby={`accordion-row-${rowId}-control`}
        >
          {children}
        </div>
      )}
    </>
  )
}
export default AccordionRow
