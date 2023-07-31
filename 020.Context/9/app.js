// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

const num = +prompt('введите число');
const n = +prompt('введите количество элементов массива');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение массива'));
}

function doNewArray(a) {
    let res = a.filter(function (el) {
        return el > num ? true : false;
    })
    return res;
}
const result = doNewArray(arr);
console.log(result);