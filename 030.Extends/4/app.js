// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади
class Figure {
    pi = 3.14;
    r;
    a;
    h;
    name;
    setRadius(r) {
        this.r = r;
    };
    setSide(a) {
        this.a = a;
    };
    setHeight(h) {
        this.h = h;
    };
}
class Circle extends Figure {
    name = 'Площадь круга равна';
    getSofCircle() {
        return `${this.name} ${this.pi * this.r ** 2}`
    }
}
class Triangle extends Figure {
    name = 'Площадь треугольника равна';
    getSofTriangle() {
        return `${this.name} ${1 / 2 * this.h * this.a}`
    }
}
class Square extends Figure {
    name = 'Площадь квадрата равна';
    getSofSquare() {
        return `${this.name} ${this.a ** 2}`
    }
}
const circle = new Circle();
circle.setRadius(3);
console.log(circle.getSofCircle());

const triangle = new Triangle();
triangle.setHeight(4);
triangle.setSide(4);
console.log(triangle.getSofTriangle());

const square = new Square();
square.setSide(5);
console.log(square.getSofSquare());