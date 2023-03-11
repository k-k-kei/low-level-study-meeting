const print = (arg) => {
    const name = arg.getName();
    const driveTime = arg.drive()
    return `${name}を${driveTime}時間運転しました`
}

const car = new Car()
console.log(print(car))

const taxi = new Taxi()
console.log(print(taxi))

// リスコフの置換原則（若干違反してますが）
// 具体クラスはその抽象クラスと代替可能であること。
// これを守れば自然とOCPになる。