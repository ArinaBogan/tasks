// Напишите программу для пересчёта величины временного интервала, заданного
// в минутах, в величину, выраженную в часах и минутах:
// Пример:
// 150 => 2 час 30 минут

const a = +prompt('введите величину временного инетрвала');

console.log(Math.trunc(a / 60), 'ч', a % 60, 'мин');