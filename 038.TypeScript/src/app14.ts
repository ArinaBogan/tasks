// Напишите программу, которая удаляет все пробелы из заданной строки и
// выводит результат.

let str14: string = prompt('введите строку');
let newStr14: string = '';

newStr14 += str14.replaceAll(' ', '');

console.log(newStr14);

