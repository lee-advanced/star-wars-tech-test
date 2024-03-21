import Section from './Section'
import Table from '../../../Table'
import { TableData } from '../../../Table/Table'
import Button from '../../../Button'

interface Props {
  id: string
  title: string
  director: string
  releaseDate: string
  openingCrawl: string
  planetList: TableData[]
}

const FilmInfo = ({
  id,
  title,
  director,
  releaseDate,
  openingCrawl,
  planetList,
}: Props) => {
  return (
    <div className="grid gap-y-3 md:grid-cols-2 md:grid-rows-2 md:gap-x-12 md:gap-y-0 md:p-3">
      <div className="grid md:grid-cols-3 md:grid-rows-2">
        <Section title="Title" content={title} />
        <Section title="Director" content={director} />
        <Section title="Release Date" content={releaseDate} />
        <div className="md:col-span-3">
          <Section title="Opening Crawl" content={openingCrawl} />
        </div>
      </div>
      <div className="md:row-span-2">
        <Table
          title="Featured Planets"
          tableHeaders={['Name', 'Population']}
          tableData={planetList}
          color="white"
        />
      </div>
      <div className="text-xl self-end">
        <Button asLink={true} href={`films/${id}`}>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default FilmInfo
