// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = prompt('введите количество элементов массива');
let arr = [];
let arr_str = [];
let arr_num = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение массива'));
}
arr.forEach(function (el) {
    if (isNaN(el)) {
        arr_str.push(el);
    } else {
        arr_num.push(el);
    }
})
console.log(arr_num);
console.log(arr_str);
