// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 2, 'world', 3, 4, 5];

function isTrue(a) {
    let res = a.every((el) => (!isNaN(el) ? true : false));
    return res;
}
const result = isTrue(arr);
console.log(result);
