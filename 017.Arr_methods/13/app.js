// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    let el = prompt('заполните массив')
    if (isNaN(el)) {
        arr.push(el)
    }
}

// let arr2 = [];
// arr.forEach(function (el) {
//     if (el.includes('javascript')) {
//         arr2.push(el);
//     }
// })
// console.log(arr2);

let arr2 = arr.filter(function (el) {
    return el.includes('javascript') ? true : false;
})
console.log(arr2);