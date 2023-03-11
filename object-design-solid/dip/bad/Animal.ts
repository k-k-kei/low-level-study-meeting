import {
  AnimalRepository
} from "../Infrastructure/AnimalRepository"

class Animal {
  private animalRepository: AnimalRepository

  constructor(private id: number) {
    this.animalRepository = new AnimalRepository(id)
  }
  get() {
    this.animalRepository.findById()
  }
}

// リポジトリパターンでAnimalというドメインからAnimalをidでデータベースから検索する処理と分けている