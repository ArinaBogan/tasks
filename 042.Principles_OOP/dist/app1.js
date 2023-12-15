// Создайте абстрактный класс Shape, содержащий абстрактный метод
// calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и
// реализует метод calculateArea() для расчета площади прямоугольника. Затем
// создайте объект класса Rectangle и выведите его площадь на экран. (для
// вычисления площади прямоугольника S = height * wigth)
class Shape {
}
class Rectangle extends Shape {
    wigth;
    height;
    calculateArea(height, wigth) {
        return this.height * this.wigth;
    }
}
const rectangle = new Rectangle();
rectangle.wigth = 10;
rectangle.height = 2;
console.log(rectangle.calculateArea);
