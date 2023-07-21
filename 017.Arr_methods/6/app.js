// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

const n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение'));
}
console.log(arr);

let result = arr.some(function (el) {
    if (el == Number(el)) {
        return true;
    } else {
        return false;
    }
})
console.log(result);
