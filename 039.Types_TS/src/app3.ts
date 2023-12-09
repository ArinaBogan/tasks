// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

let n: number = +prompt('введите количество элементов массива');
let arr3: number[] = [];

for (let i: number = 0; i < n; i++) {
    arr3.push(+prompt('введите число'))
}

let res3 = arr3.reduce((sum: number, el: number) => {
    return sum + el;
}, 0)

console.log(res3);
