// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = prompt('введите количество элемпентов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    let element = (prompt('введите эелемент'));
    if (!isNaN(element)) {
        arr.push(element)
    }
}

const num = arr.reduce((res, el) => {
    return res * el;
}, 1);
console.log(num);

let res = 1;
arr.forEach(function (el) {
    res *= el;
});
console.log(res);
