// Создайте переменные num1 и num2 и присвойте им два различных числовых
// значения. Выведите в консоль большее из двух чисел.

const num1: number = +prompt('введите первое число');
const num2: number = +prompt('введите второе число');
//1
if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

//2
console.log(num1 > num2 ? num1 : num2);

//3
console.log(Math.max(num1, num2));
