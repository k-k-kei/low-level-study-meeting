import {
  AnimalRepository,
  IAnimalRepository
} from "../Infrastructure/AnimalRepository"

class Animal {
  constructor(private animalRepository: IAnimalRepository) {
    this.animalRepository = animalRepository
  }
  get() {
    this.animalRepository.findById()
  }
}