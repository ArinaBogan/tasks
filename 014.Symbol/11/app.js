// Напишите скрипт, который будет находить факториал числа. Факториал – это
// произведение всех целых чисел, меньше данного, и его самого.
// 5 -> 120 (1*2*3*4*5)

const num = prompt('введите число');
let fakt = 1;

for (let i = 1; i <= num; i++) {
    fakt *= i;
}
console.log(fakt);