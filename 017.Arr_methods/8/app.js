// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение'));
}

// let res = [];
// arr.forEach(function (el) {
//     if (!isNaN(el)) {
//         res.push(el)
//     }
// })
// arr.length == res.length ? console.log(true) : console.log(false);

let res = arr.every(function (el) {
    return !isNaN(el) ? true : false;
})
console.log(res);
