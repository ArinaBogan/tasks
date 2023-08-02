// Вычислить факториал числа используя рекурсию

const num = +prompt('введите число');

function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n - 1);
}
let result = factorial(num);
console.log(result);