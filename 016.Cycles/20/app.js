// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

const num = '55639217'.split('');
let res = [];

for (let i = 0; i < num.length; i++) {
    if (i == 0) {
        res.push(num[i]);
        continue;
    }
    if (num[i] % 2 !== 0 && num[i - 1] % 2 !== 0) {
        res.push(':', num[i]);
        continue;
    }
    res.push(num[i]);
}
console.log(res.join(''));
