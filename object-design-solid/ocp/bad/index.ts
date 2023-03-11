const animalSound = (animal) => {
    for (let i = 0; i < animal.length; i++) {
        if (animal[i].animalName === 'cat') console.log('meow')
        if (animal[i].animalName === 'dog') console.log('bowwow')
    }
}

const animals = [new Animal('cat'), new Animal('dog')]

animalSound(animals)