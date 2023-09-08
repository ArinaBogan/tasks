// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из отфильтрованных значений, где строка начинается на [a, h].
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;

function doArray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('введите элемент массива'));
    }
    return arr;
}
const result = doArray(n);

function doFilterArray(result) {
    const newArr = result.filter((el) => el[0] === 'a' || el[0] === 'h')
    return newArr
}
const res = doFilterArray(result);
console.log(res);
