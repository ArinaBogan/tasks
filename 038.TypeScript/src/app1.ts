// Напишите программу, которая проверяет, является ли заданное число num
// четным или нечетным

const num: number = +prompt('введите значение');
//1
if (num % 2 == 0) {
    console.log('четное');
} else {
    console.log('нечетное');
}
//2
console.log(num % 2 == 0 ? 'четное' : 'нечетное');

