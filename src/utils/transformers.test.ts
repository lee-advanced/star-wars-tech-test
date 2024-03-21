import * as transformers from './transformers'
import * as entities from '@/types/entities'

describe('planetTransformer', () => {
  const testPlanet: entities.Planet = {
    name: 'planet-1',
    population: 250000,
    climates: ['arid', 'jungle'],
  }

  it('should return a normalised planet when given raw planet data', () => {
    const result = transformers.planetTransformer(testPlanet)

    expect(result.name).toEqual('planet-1')
    expect(result.population).toEqual(250000)
    expect(result.climates).toEqual('arid, jungle')
  })

  it('should normalise a population of null to 0', () => {
    const modifiedTestPlanet = { ...testPlanet, population: null }

    const result = transformers.planetTransformer(modifiedTestPlanet)

    expect(result.name).toEqual('planet-1')
    expect(result.population).toEqual(0)
    expect(result.climates).toEqual('arid, jungle')
  })
})

describe('characterTransformer', () => {
  const testCharacter: entities.Character = {
    name: 'john',
    species: {
      name: 'lion',
      homeworld: {
        name: 'planet-1',
      },
    },
  }

  it('should return a normalised character when given raw character data', () => {
    const result = transformers.characterTransformer(testCharacter)

    expect(result.name).toEqual('john')
    expect(result.species).toEqual('lion')
  })

  it('should normalise a species of null to Human', () => {
    const modifiedTestCharacter = { ...testCharacter, species: null }

    const result = transformers.characterTransformer(modifiedTestCharacter)

    expect(result.name).toEqual('john')
    expect(result.species).toEqual('Human')
  })
})

describe('speciesTransformer', () => {
  const testSpecies: entities.Species = {
    name: 'human',
    homeworld: {
      name: 'planet-1',
    },
  }

  it('should return a normalised species when given raw species data', () => {
    const result = transformers.speciesTransformer(testSpecies)

    expect(result.name).toEqual('human')
    expect(result.homeworld).toEqual('planet-1')
  })

  it('should normalise a homeworld of null to Unknown', () => {
    const modifiedTestSpecies = { ...testSpecies, homeworld: null }

    const result = transformers.speciesTransformer(modifiedTestSpecies)

    expect(result.name).toEqual('human')
    expect(result.homeworld).toEqual('Unknown')
  })
})

describe('craftTransformer', () => {
  const testVehicle: entities.Vehicle = {
    name: 'land speeder',
    pilotConnection: {
      pilots: [{ name: 'bill' }],
    },
  }

  const testStarship: entities.Starship = {
    name: 'x-wing',
    pilotConnection: {
      pilots: [{ name: 'john' }],
    },
  }

  it('should return a normalised craft when given raw vehicle or starship data', () => {
    const resultOne = transformers.craftTransformer(testVehicle)

    expect(resultOne.name).toEqual('land speeder')
    expect(resultOne.pilots).toEqual('bill')

    const resultTwo = transformers.craftTransformer(testStarship)

    expect(resultTwo.name).toEqual('x-wing')
    expect(resultTwo.pilots).toEqual('john')
  })

  it('should normalise an empty pilots array to Unknown', () => {
    const modifiedTestOne = { ...testVehicle, pilotConnection: { pilots: [] } }

    const resultOne = transformers.craftTransformer(modifiedTestOne)

    expect(resultOne.name).toEqual('land speeder')
    expect(resultOne.pilots).toEqual('Unknown')

    const modifiedTestTwo = { ...testStarship, pilotConnection: { pilots: [] } }

    const resultTwo = transformers.craftTransformer(modifiedTestTwo)

    expect(resultTwo.name).toEqual('x-wing')
    expect(resultTwo.pilots).toEqual('Unknown')
  })
})

describe('genericTransformer', () => {
  it('should transform an array of entities with the given transformer', () => {
    const testSpecies: entities.Species = {
      name: 'human',
      homeworld: {
        name: 'planet-1',
      },
    }

    const result = transformers.genericTransformer(
      [testSpecies],
      transformers.speciesTransformer
    )

    expect(result.length).toEqual(1)
    expect(result[0].name).toEqual('human')
    expect(result[0].homeworld).toEqual('planet-1')
  })
})
