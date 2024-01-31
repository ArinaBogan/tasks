// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    let element = (prompt('введите элемент'));
    if (!isNaN(element)) {
        arr.push(element)
    }
}

// let res = 0;
// arr.forEach(function (element) {
//     res += +element;
// })
// console.log(res);

let res = arr.reduce((sum, element) => {
    return sum + +element;
}, 0)
console.log(res);