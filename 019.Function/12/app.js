// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = prompt('введите слово');

function doCheck(a) {
    if (a.toLowerCase().trim() == a.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
const result = doCheck(str);
console.log(result);



