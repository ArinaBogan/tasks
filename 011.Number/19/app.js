// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения ax^2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt('введите значение a');
const b = +prompt('введите значение b');
const c = +prompt('введите значение c');

const d = b * b - 4 * a * c;

if (d > 0) {
    const x1 = (-Math.sqrt(d) - b) / (2 * a);
    const x2 = (Math.sqrt(d) - b) / (2 * a);

    if (x1 > x2) {
        console.log(x1, x2);
    } else { console.log(x2, x1); }
}

else if (d < 0) {
    console.log('нет корней');
}
else if (d == 0) {
    console.log(-b / (2 * a));
}