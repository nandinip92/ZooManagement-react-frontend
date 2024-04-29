import EnclosureAnimal from "./enclosureAnimal"

interface Enclosure {
  EnclosureId: number
  EnclosureName: string
  Classification: string
  AnimalsCount: number
  Animals: Array<EnclosureAnimal>
}
export default Enclosure
