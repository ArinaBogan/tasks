// Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
// (хначение инициализируется через конструктор класса), методы getAverage,
// getMax, getMin для вычисления среднего значения, максимального и
// минимального элементов массива.

class ArrayAnalyzer {
    arr: number[] = [];

    constructor(n: number) {
        for (let i: number = 0; i < n; i++) {
            this.arr.push(Math.round(Math.random() * 10))
        }
        console.log(this.arr);

    }
    getAverage(): number {
        let res = this.arr.reduce((sum, el) => {
            return sum += el;
        }, 0)

        return res / this.arr.length;
    }

    getMax(): number {
        return Math.max(...this.arr)
    }

    getMin(): number {
        return Math.min(...this.arr)
    }
}

const arrayAnalyzer = new ArrayAnalyzer(6)

console.log(arrayAnalyzer.getAverage(),
    arrayAnalyzer.getMax(),
    arrayAnalyzer.getMin());


