// На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const n = 4;
let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);
}

function doFact(a) {
    let res = a.reduce(function (result, el) {
        return result * el;
    }, 1)
    return res;
}
const fact = doFact(arr);
console.log(fact);