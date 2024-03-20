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
    <div className="grid grid-cols-2 p-10 h-fit">
      <div className="grid grid-cols-3 gap-y-8">
        <Section title="Title" copy={title} />
        <Section title="Director" copy={director} />
        <Section title="Release Date" copy={releaseDate} />
        <div className="col-span-3">
          <Section title="Opening Crawl" copy={openingCrawl} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <PlanetList planets={planetList} panelId={panelId} />
      </div>
    </div>
  )
}

export default FilmInfo
