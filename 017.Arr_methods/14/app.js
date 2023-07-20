// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = prompt('введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    let el = prompt('введите элемент');
    if (isNaN(el)) {
        arr.push(el);
    }
}

// let arr2=[];
// arr.forEach(function(el){
//     arr2.push('#'+el);
// })
// console.log(arr2);

let arr2 = arr.map(function (el) {
    return '#' + el;
})
console.log(arr2);

