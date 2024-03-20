import { getClient } from '@/services/ApolloClient'
import { allFilms } from '@/queries/queries'
import { Accordion, FilmInfo } from '@/components'

export default async function Home() {
  const { data } = await getClient().query({ query: allFilms })
  const mappedData = data.allFilms.films.map(
    ({ title, director, releaseDate, openingCrawl, planetConnection }: any) => {
      return {
        title,
        subtitles: [`Director: ${director}`, `Release Date: ${releaseDate}`],
        content: (
          <FilmInfo
            title={title}
            director={director}
            releaseDate={releaseDate}
            openingCrawl={openingCrawl}
            planetList={planetConnection.planets}
            panelId={`${title}-panel`}
          />
        ),
      }
    }
  )

  return <Accordion accordionRows={mappedData} />
}
