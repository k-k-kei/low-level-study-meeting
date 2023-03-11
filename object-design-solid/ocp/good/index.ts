const animalSound = (animals) => {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i].makeSound())
    }
}

const animals = [new Cat(), new Dog()]

animalSound(animals)