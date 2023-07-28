// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const n = prompt('введите количество элементов массива');
const arr = [];

function doArray(a) {
    for (let i = 0; i < n; i++) {
        a.push(prompt('введите число'));
    }
    return a;
}
const array = doArray(arr);

function doCheck(a) {
    let res = a.every(function (el) {
        return !isNaN(el) ? true : false;
    })
    return res;
}
const check = doCheck(arr);

function doMultiplication(a) {
    let res = a.reduce(function (product, el) {
        return product * el;
    }, 1)
    return res;
}
const multiplication = doMultiplication(arr);

console.log(check == true ? multiplication : false);
