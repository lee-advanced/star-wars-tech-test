import Section from '../../../Section'
import { TableData } from '../../../Table/Table'
import { Button, Table } from '@/components'

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
    <div className="grid p-6 gap-y-6 xl:grid-cols-2 xl:grid-rows-2 xl:gap-x-12 xl:gap-y-0 xl:p-3">
      <div className="grid gap-y-6 xl:grid-cols-3 xl:grid-rows-2">
        <Section title="Title" content={title} />
        <Section title="Director" content={director} />
        <Section title="Release Date" content={releaseDate} />
        <div className="xl:col-span-3">
          <Section title="Opening Crawl" content={openingCrawl} />
        </div>
      </div>
      <div className="mb-6 xl:row-span-2">
        <Table
          title="Featured Planets"
          tableHeaders={['Name', 'Population']}
          tableData={planetList}
          color="white"
        />
      </div>
      <div className="text-xl w-full self-stretch xl:self-end xl:w-1/2">
        <Button asLink={true} href={`films/${id}`}>
          Read More
        </Button>
      </div>
    </div>
  )
}

export default FilmInfo
