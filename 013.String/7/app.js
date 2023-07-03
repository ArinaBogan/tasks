// На вход программе подаётся строка. Замените все @ на '!' (2 способа)

let a = prompt('введите строку');

console.log(!isNaN(a) ? 'ошибка ввода' : a.replaceAll('@', "!"));

console.log(!isNaN(a) ? 'ошибка ввода' : a.split('@').join('!'))