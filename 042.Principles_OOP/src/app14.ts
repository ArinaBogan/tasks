// Создайте класс Counter, который будет представлять счетчик. У класса Counter
// должно быть свойство count (первоначальное значение задается сеттером) и
// методы increment и decrement, которые будут увеличивать и уменьшать значение
// счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
// методов.

interface iCounter {
    count: number,
    setCount(count_: number): void,
    getCount(): number,
    increment(): number,
    decrement(): number
}

class Counter implements iCounter {
    count: number;
    
    setCount(count_: number): void {
        this.count = count_;
    }
    getCount(): number {
        return this.count
    }
    increment() {
        return this.count += 1;
    }

    decrement() {
        return this.count -= 1;
    }
}
const counter = new Counter();
counter.setCount(1);
counter.getCount();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.count);