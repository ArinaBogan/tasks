// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str_1 = 'липа';
const str_2 = 'пила';

function isAnagramm(a, b) {
    if (a.toLowerCase().trim().split('').sort().join('') ==
        b.toLowerCase().trim().split('').sort().join('')) {
        return true;
    } else {
        return false;
    }
}
const result = isAnagramm(str_1, str_2);
console.log(result);
