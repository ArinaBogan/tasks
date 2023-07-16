// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for of найдите сумму
// элементов этого массива

const a = [1, 2, 3, 4, 5];
let sum = 0;

// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }
// console.log(sum);

// for (let elem of a) {
//     sum += elem;
// }
// console.log(sum);

let i = 0;
do {
    sum += a[i];
    i++
} while (i < a.length);
console.log(sum);