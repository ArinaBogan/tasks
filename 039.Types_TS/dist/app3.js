// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
let n = +prompt('введите количество элементов массива');
let arr3 = [];
for (let i = 0; i < n; i++) {
    arr3.push(+prompt('введите число'));
}
let res3 = arr3.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(res3);
