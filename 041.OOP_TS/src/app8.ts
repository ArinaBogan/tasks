// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2

class CircleR {
    radius: number;

    getArea(): number {
        return 3.14 * this.radius ** 2
    }
}

const circleR = new CircleR();
circleR.radius=2;

console.log(circleR.getArea());

