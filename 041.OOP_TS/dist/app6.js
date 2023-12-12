// Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
//1
// class Calculator {
//     a: number;
//     b: number;
//     constructor(a: number, b: number) {
//         this.a = a;
//         this.b = b
//     }
//     add() {
//         return this.a + this.b
//     }
//     substract() {
//         return this.a - this.b
//     }
//     multiply() {
//         return this.a * this.b
//     }
//     divide() {
//         return this.a / this.b
//     }
// }
// const calculator = new Calculator(10, 2);
// console.log(calculator.add());
// console.log(calculator.substract());
// console.log(calculator.multiply());
// console.log(calculator.divide());
//2
class Calculator {
    a;
    b;
    add() {
        return this.a + this.b;
    }
    substract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        return this.a / this.b;
    }
}
const calculator = new Calculator();
calculator.a = 5;
calculator.b = 2;
console.log(calculator.add());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.divide());
