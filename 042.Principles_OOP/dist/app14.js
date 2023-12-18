// Создайте класс Counter, который будет представлять счетчик. У класса Counter
// должно быть свойство count (первоначальное значение задается сеттером) и
// методы increment и decrement, которые будут увеличивать и уменьшать значение
// счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
// методов.
class Counter {
    count;
    setCount(count_) {
        this.count = count_;
    }
    getCount() {
        return this.count;
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
