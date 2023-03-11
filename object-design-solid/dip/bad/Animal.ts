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
// 理解間違ってるかもしれませんがAnimalドメインとデータベースの実行処理を切り離す目的がある。
// あくまでAnimalドメインはそれ自身の状態や変更に責任を負うのであってデータベース接続部分に責任をおわないという切り離し方。
// Animalドメインのデータを永続化するためにはデータベースに保存する必要があり、データベースへの処理実行をドメインと切り離してもつ目的がある。
// それって何がいいの？かというと例えばデータベースがfirebaseからやっぱmysqlにしよう！となっても、ドメインに変更を加える必要がなくなる。

// ドメイン -> データベース
// ドメインがデータベースのことを知っている必要がありDB変更されるとドメインも変更必要

// ドメイン -> ドメインリポジトリ -> データベース
// ドメインがデータベースのことを知っている必要がない。DB変更されてもリポジトリで差分を吸収できる。
