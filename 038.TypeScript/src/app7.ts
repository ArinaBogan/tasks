// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.

const n: number = +prompt('введите число');
let fakt: number = 1;

for (let i: number = 1; i <= n; i++) {
    fakt *= i;
}
console.log(fakt);
