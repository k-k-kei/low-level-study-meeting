const print = (arg) => {
    const driveTime = arg.drive()
    return `${driveTime}時間運転しました`
}

const car = new Car()
console.log(print(car))

const taxi = new Taxi()
console.log(print(taxi))