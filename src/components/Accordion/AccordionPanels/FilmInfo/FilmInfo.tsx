import PlanetList from './PlanetList'
import Section from './Section'
import { Planet } from './types/types'

interface Props {
  title: string
  director: string
  releaseDate: string
  openingCrawl: string
  planetList: Planet[]
  panelId: string
}

const FilmInfo = ({
  title,
  director,
  releaseDate,
  openingCrawl,
  planetList,
  panelId,
}: Props) => {
  return (
    <div className="grid gap-y-3 md:grid-cols-6 md:grid-rows-2 md:gap-x-5 md:gap-y-0 md:p-3">
      <Section title="Title" content={title} />
      <Section title="Director" content={director} />
      <Section title="Release Date" content={releaseDate} />
      <div className="md:col-span-3">
        <Section title="Opening Crawl" content={openingCrawl} />
      </div>
      <div className="md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1">
        <Section
          title="Featured Planets"
          content={<PlanetList planets={planetList} panelId={panelId} />}
        />
      </div>
    </div>
  )
}

export default FilmInfo
