import Table from '../Table'
import Section from '../Section'
import * as transformers from '@/utils/transformers'

interface Props {
  filmData: any
}

const DetailedFilmDisplay = ({ filmData }: Props) => {
  const {
    title,
    episodeID,
    director,
    producers,
    releaseDate,
    openingCrawl,
    characters,
    planets,
    species,
    starships,
    vehicles,
  } = filmData

  return (
    <div className="flex flex-col gap-y-6 p-4 items-center md:gap-y-8 md:items-start md:px-12 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <div className="grid gap-y-6 md:grid-cols-2 md:gap-24">
        <div className="grid gap-y-6 md:grid-cols-4 md:col-span-2 md:gap-24">
          <Section title="Episode" content={`${episodeID}`} />
          <Section title="Director" content={director} />
          <Section title="Producers" content={producers.join('\n')} />
          <Section title="Release Date" content={releaseDate} />
        </div>
        <div className="grid gap-y-6 md:col-span-2 md:gap-24">
          <Section title="Opening Crawl" content={openingCrawl} />
        </div>
        <div className="grid gap-y-6 place-content-stretch md:col-span-2 md:grid-cols-2 md:place-content-start md:gap-24">
          <Table
            title="Characters"
            tableHeaders={['Name', 'Species']}
            tableData={transformers.genericTransformer(
              characters,
              transformers.characterTransformer
            )}
          />
          <Table
            title="Planets"
            tableHeaders={['Name', 'Population', 'Climates']}
            tableData={transformers.genericTransformer(
              planets,
              transformers.planetTransformer
            )}
          />
          <Table
            title="Species"
            tableHeaders={['Name', 'Homeworld']}
            tableData={transformers.genericTransformer(
              species,
              transformers.speciesTransformer
            )}
          />
          <Table
            title="Starships"
            tableHeaders={['Name', 'Pilots']}
            tableData={transformers.genericTransformer(
              starships,
              transformers.craftTransformer
            )}
          />
          <Table
            title="Vehicles"
            tableHeaders={['Name', 'Pilots']}
            tableData={transformers.genericTransformer(
              vehicles,
              transformers.craftTransformer
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default DetailedFilmDisplay
