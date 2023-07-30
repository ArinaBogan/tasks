// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const n = prompt('введите количество элементов массива');
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение'));
}

let result = arr.filter(function (el) {
    if (el > 0) {
        return true;
    } else {
        return false;
    }
})
console.log(result);