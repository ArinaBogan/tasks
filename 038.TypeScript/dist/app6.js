// Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.
const str = prompt('введите слово палиндром');
const newStr = str.split('').reverse().join('');
if (str == newStr) {
    console.log('данное слово является палиндромом');
}
else {
    console.log('данное слово не является палиндромом');
}
