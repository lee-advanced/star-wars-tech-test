import Table from '../Table'
import Section from '../Accordion/AccordionPanels/FilmInfo/Section'
import * as transformers from '@/utils/transformers'

interface Props {
  // TODO: change to typed schema
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
    <div className="flex flex-col gap-y-8 p-4 items-center md:items-start md:px-12 ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <div className="grid md:grid-cols-2 gap-24">
        <div className="grid md:grid-cols-4 md:col-span-2 gap-24">
          <Section title="Episode" content={`${episodeID}`} />
          <Section title="Director" content={director} />
          <Section title="Producers" content={producers.join('\n')} />
          <Section title="Release Date" content={releaseDate} />
        </div>
        <div className="grid md:col-span-2 gap-24">
          <Section title="Opening Crawl" content={openingCrawl} />
        </div>
        <div className="grid md:col-span-2 md:grid-cols-2 place-content-start gap-24">
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
