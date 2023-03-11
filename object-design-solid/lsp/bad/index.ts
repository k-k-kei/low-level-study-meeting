const print = (arg) => {
    const name = arg.getName();
    const driveTime = arg.drive()
    if(name === 'car') {
        return `${name}を${driveTime}時間運転しました`
    }
    if(name === 'taxi') {
        return `${name}を${driveTime}運転しました`
    }
}

const car = new Car()
console.log(print(car))
// carを6時間運転しました

const taxi = new Taxi()
console.log(print(taxi))
// taxiを5時間運転しました
