// Найти значение массива, повторяющееся в нем наибольшее количество раз
// 1 вариант
// const arr = [30, 20, 10, 10, 40, 50, 10, 30, 20];
// let obj = {};

// for (let el of arr) {
//     obj[el] ? obj[el] += 1 : obj[el] = 1;
// }
// console.log(obj);

// const res = [];
// for (let key in obj) {
//     res.push(obj[key]);
// }
// console.log(res);

// const max = Math.max(...res);

// for (let key in obj) {
//     obj[key] == max ?
//         console.log(` ${key} повторяется наибольшее количество раз:${obj[key]} раз`) : null;
// }

// 2 вариант
const arr = ['b', 'n', 'a', 'a', 'h', 'n', 'a', 'h'];
const obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] += 1;
    } else {
        obj[arr[i]] = 1;
    }
}
console.log(obj);

let max = obj[arr[0]];
for (let key in obj) {
    if (obj[key] > max) {
        max = obj[key];
    }
}

for (let key in obj){
    if(obj[key]==max){
        console.log([key]);
        break;
    }
}