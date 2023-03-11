class PayCalculator {
    calculatePay() {}
}

class HourReporer {
    reporyHours() {}
}

class EmployeeSaver {
    save() {}
}

const payCalculator = new PayCalculator;
payCalculator.calculatePay();

const hourReporer = new HourReporer;
hourReporer.reporyHours();

const employeeSaver = new EmployeeSaver;
employeeSaver.save();

// Employeeの責任範囲が広すぎる。
// 一つのクラスの目的はなるべく一つにする。

// クラスの凝集度を高める
// 凝集度が高いクラスとは、クラスインスタンスを作成するときにメソッドを全て使っている状態
// 凝集度が低い場合、複数人が同時にシステムに変化を加えた場合、コンフリクトが起きやすい
// コンフリクトが起きるということはお互いの変更に依存しやすくなり壊れやすいシステムである