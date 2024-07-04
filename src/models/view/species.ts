import Enclosure from "./enclosure"

export interface Species {
  speciesId: number
  speciesName: string
  Enclosure: Enclosure
}

export interface SpeciesList{
  speciesList:Array<Species>
}

