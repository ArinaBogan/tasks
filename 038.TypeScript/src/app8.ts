// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

let s: string[] = prompt('введите строку').split(' ');

for (let i = 0; i < s.length; i++) {
    console.log(s[i][1]);
}