export interface IAnimalRepository {
  findById(): void
}

export class AnimalRepository implements IAnimalRepository {
  constructor(private id: number) {}
  findById() {}
}