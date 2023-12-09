// Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
const arrStr = prompt('введите строку').split(' ');
let res4 = arrStr.some((el) => {
    if (el.length > 5) {
        return true;
    }
    else {
        return false;
    }
});
console.log(res4);
