// На вход программе подается строка. Напишите программу, которая меняет
// регистр символов, другими словами замените все строчные символы заглавными
// и наоборот.
// Swap Case => sWAP cASE

const a = prompt('введите строку').trim();
let res = '';

for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toLowerCase()) {
        res += a[i].toUpperCase();
    } else {
        res += a[i].toLowerCase();
    }
}
console.log(res);