// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его

let a = +prompt('введите первое число от 0 до 10');
let b = +prompt('введите второе число от 0 до 10');

if (isNaN(a) || isNaN(b)) {
    console.log('ошибка ввода');
} else if (a >= 0 && a < 10 && b >= 0 && b < 10) {
    a === 0 ? console.log(`I'm ${b}`) : console.log(`I'm ${a}${b}`);
} else {
    console.log('введите другое число');
}