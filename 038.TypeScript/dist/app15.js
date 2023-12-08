// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“
const str15 = 'bhfwl invmo jjoerv jokfe'.split(' ');
let res15 = '';
for (let i = 0; i < str15.length; i++) {
    res15 += str15[i][str15[i].length - 1] + ' ';
}
console.log(res15);
