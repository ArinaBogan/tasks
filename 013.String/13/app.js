// Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// 'xx.xx.xxxx.

let date = 'xxxx-xx-xx';

console.log(date.split('-').reverse().join('.'));
