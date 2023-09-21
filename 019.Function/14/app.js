// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [1, 2, 3, 4, -5, -6, 7, 8];

function doCheck(a) {
    let res = a.every(function (el) {
        return !isNaN(el) ? true : false;
    })
    return res;
}
const check = doCheck(arr);

function findMax(a) {
    let max = a[0];
    for (let i = 0; i < a.length; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}
const result = findMax(arr);

console.log(check == true ? result : check);