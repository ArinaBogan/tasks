// Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
//1
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(a: number, b: number) {
//         this.width = a;
//         this.height = b
//     }
//     getArea() {
//         return this.height * this.width
//     }
// }
// const rectangle = new Rectangle(4, 4);
// console.log(rectangle.getArea());
//2
// class Rectangle {
//     width: number;
//     height: number;
//     getArea(): number {
//         return this.height * this.width
//     }
// }
// const rectangle = new Rectangle();
// rectangle.height = 5;
// rectangle.width = 4;
// console.log(rectangle.getArea());
//3
class Rectangle {
    getArea(width, height) {
        return height * width;
    }
}
const rectangle = new Rectangle();
console.log(rectangle.getArea(4, 5));
