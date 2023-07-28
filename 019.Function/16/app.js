// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

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

function squareNum(a) {
    let res = a.filter(function (el) {
        return el % 2 == 0 ? el ** 2 : false;
    })
    return res;
}
const sqr = squareNum(arr);

console.log(check == true ? sqr : false);