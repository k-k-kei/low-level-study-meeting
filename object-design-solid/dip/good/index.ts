const animalRepository = new AnimalRepository(1)
const animal = new Animal(animalRepository)
animal.get()

// badの例だと、AnimalクラスはAnimalRepositoryクラスに依存している。
// 仮にユーザー検索をidではなくnameで行いたくなった時に、idをnameに修正するか、idに加えてnameも追加するかが必要
// 前者の場合は都度修正が発生するし、後者の場合は凝集度が低くなる。

// goodの例の場合は、Animalに注入するクラスを柔軟に変更できる。
// nameで検索したくなってもAnimalRepositoryにnameを追加すれば柔軟に処理を変えられる。