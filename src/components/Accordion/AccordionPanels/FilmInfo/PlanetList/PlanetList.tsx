import { Planet } from '../types/types'

interface Props {
  planets: Planet[]
  panelId: string
}

const PlanetList = ({ planets, panelId }: Props) => {
  const normalisePop = (population: number | null): number => population ?? 0

  return (
    <table className="w-3/4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr
            key={`${panelId}-${planet.name}`}
            className="border-b border-black"
          >
            <td>{planet.name}</td>
            <td>{normalisePop(planet.population)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PlanetList
