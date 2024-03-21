import * as entities from '@/types/entities'

export const planetTransformer = (
  planet: entities.Planet
): entities.NormalisedPlanet => {
  const normalisedClimates = planet.climates.join(', ')
  const normalisedPopulation = planet.population ?? 0

  return {
    name: planet.name,
    population: normalisedPopulation,
    climates: normalisedClimates,
  }
}

export const characterTransformer = (
  character: entities.Character
): entities.NormalisedCharacter => {
  const normalisedSpecies =
    character.species === null ? 'Human' : character.species.name

  return {
    name: character.name,
    species: normalisedSpecies,
  }
}

export const speciesTransformer = (
  species: entities.Species
): entities.NormalisedSpecies => {
  const normalisedHomeworld =
    species.homeworld === null ? 'Unknown' : species.homeworld.name

  return {
    name: species.name,
    homeworld: normalisedHomeworld,
  }
}

export const craftTransformer = (
  craft: entities.Starship | entities.Vehicle
): entities.NormalisedStarship | entities.NormalisedVehicle => {
  const normalisedPilots =
    craft.pilotConnection.pilots.length > 0
      ? craft.pilotConnection.pilots.map((pilot) => pilot.name).join(', ')
      : 'Unknown'

  return {
    name: craft.name,
    pilots: normalisedPilots,
  }
}

export const genericTransformer = (
  dataTargets: entities.DefaultEntity[],
  transformer: any
): entities.NormalisedEntity[] => {
  return dataTargets.map((entity) => transformer(entity))
}
