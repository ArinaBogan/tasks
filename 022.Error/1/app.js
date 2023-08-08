// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const n = prompt('Введите значение');

function isNumber(n) {
    try {
        if (isNaN(n)) throw new Error('Введена строка');
        if (n % 2 !== 0) throw new Error('Число нечетное');
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = isNumber(n);
console.log(result);