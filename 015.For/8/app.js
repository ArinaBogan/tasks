// Преобразуйте первую букву каждого слова строки в верхний регистр.

let str = 'I am developer'.split(' ');
let a = '';

for (let i = 0; i < str.length; i++) {
    a += str[i][0].toUpperCase() + str[i].slice(1) + " ";
}
console.log(a);