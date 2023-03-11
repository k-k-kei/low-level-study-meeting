const animalSound = (animals) => {
    for (let i = 0; i < animals.length; i++) {
        console.log(animals[i].makeSound())
    }
}

const animals = [new Cat(), new Dog()]

animalSound(animals)

// OCPでは修正に対してclosedで変更に対してopenな状態を作ることを目標にする
// badの例だと対象の動物が増えるたびにanimalSoundの条件分岐を修正する必要があり修正に対してclosedではない
// goodの例だとその必要はなくクラスを増やせば動物を簡単に増やすことができる。修正に対してclosedで変更に対してopenである。

