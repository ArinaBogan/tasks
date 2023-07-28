// На входе число n. Напишите функцию, которая переворачивает число.

const n = '150';

function doReverse(str) {
    return str.split('').reverse().join('');
}

let result = doReverse(n);
console.log(result);