export interface Planet {
  name: string
  population: number
  climates: string[]
}

export interface NormalisedPlanet extends Omit<Planet, 'climates'> {
  [key: string]: string | number
  climates: string
}

export interface Character {
  name: string
  species: Species
}

export interface NormalisedCharacter extends Omit<Character, 'species'> {
  [key: string]: string | number
  species: string
}

export interface Species {
  name: string
  homeworld: Omit<Planet, 'population|climates'>
}

export interface NormalisedSpecies extends Omit<Species, 'homeworld'> {
  [key: string]: string | number
  homeworld: string
}

export interface Pilot extends Omit<Character, 'species'> {}

export interface Starship {
  name: string
  pilots: Pilot[]
}

export interface NormalisedStarship extends Omit<Starship, 'pilots'> {
  [key: string]: string | number
  pilots: string
}

export interface Vehicle extends Starship {}

export interface NormalisedVehicle extends Omit<Vehicle, 'pilots'> {
  [key: string]: string | number
  pilots: string
}

export type NormalisedEntity =
  | NormalisedCharacter
  | NormalisedPlanet
  | NormalisedSpecies
  | NormalisedStarship
  | NormalisedVehicle

export type DefaultEntity =
  | Character
  | Pilot
  | Planet
  | Species
  | Starship
  | Vehicle
