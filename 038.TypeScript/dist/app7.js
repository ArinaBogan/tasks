// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
const n = +prompt('введите число');
let fakt = 1;
for (let i = 1; i <= n; i++) {
    fakt *= i;
}
console.log(fakt);
