// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r

class CircleC {
    radius: number;

    getCircumference() {
        return 2 * 3.14 * this.radius;
    }
}
const circleC = new CircleC();
circleC.radius = 2;

console.log(circleC.getCircumference());
