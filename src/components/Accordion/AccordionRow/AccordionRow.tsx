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
    <div
      className={`h-fit bg-gradient-to-r from-black via-zinc-900 to-zinc-800 text-white rounded-2xl ${
        !contentVisible ? 'hover:scale-105 hover:transition-transform' : ''
      }`}
    >
      <h3 className="h-fit p-6 md:h-36">
        <button
          id={`${rowId}-control`}
          type="button"
          aria-expanded={contentVisible}
          aria-controls={`${rowId}-content`}
          onClick={onClickHandler}
          className="flex flex-col items-center justify-between h-full w-full gap-y-3 md:items-start md:flex-row"
        >
          <div className="flex flex-col items-start justify-center gap-y-6">
            <span className="text-4xl font-bold">{title}</span>
            <span className="flex flex-col gap-y-3 justify-around text-xl text-sw-grey-light md:flex-row">
              {renderedSubtitles}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-8 stroke-white transition-transform duration-200 ${
              contentVisible ? 'rotate-180' : ''
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </h3>
      {contentVisible && (
        <div className="flex flex-col">
          <hr className="w-1/2 self-center my-4 opacity-50" />
          <div
            id={`${rowId}-content`}
            role="region"
            aria-labelledby={`${rowId}-control`}
            className="w-full h-fit p-3 transition"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
export default AccordionRow
