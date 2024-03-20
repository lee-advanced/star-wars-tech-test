import { getClient } from '@/services/ApolloClient'
import { allFilms } from '@/queries/queries'
import { Accordion } from '@/components'

const TestHeading = () => <h4>Test Heading</h4>

export default async function Home() {
  const { data } = await getClient().query({ query: allFilms })
  const mappedData = data.allFilms.films.map(
    ({ title, director, releaseDate }: any) => {
      return {
        title,
        subtitles: [`Director: ${director}`, `Release Date: ${releaseDate}`],
        content: <TestHeading />,
      }
    }
  )

  return <Accordion accordionRows={mappedData} />
}
