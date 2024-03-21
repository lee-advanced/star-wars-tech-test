import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { getClient } from '@/services/ApolloClient'
import { filmDetail } from '@/queries/queries'
import { DetailedFilmDisplay } from '@/components'

interface Props {
  params: Params
}

const FilmPage = async ({ params }: Props) => {
  const {
    data: {
      film: {
        director,
        episodeID,
        openingCrawl,
        producers,
        releaseDate,
        title,
        characterConnection: { characters },
        planetConnection: { planets },
        speciesConnection: { species },
        starshipConnection: { starships },
        vehicleConnection: { vehicles },
      },
    },
  } = await getClient().query({
    query: filmDetail,
    variables: { id: decodeURIComponent(params.filmId) },
  })

  return (
    <DetailedFilmDisplay
      filmData={{
        director,
        episodeID,
        openingCrawl,
        producers,
        releaseDate,
        title,
        characters,
        planets,
        species,
        starships,
        vehicles,
      }}
    />
  )
}

export default FilmPage
