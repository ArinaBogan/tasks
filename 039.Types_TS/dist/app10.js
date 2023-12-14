// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const arr10 = ['hello', 'world'];
const consonants = 'qwrtpsdfghjklzxcvbnm';
let str10 = '';
for (let i = 0; i < arr10.length; i++) {
    str10 += arr10[i] + ' ';
}
console.log(str10);
for (let i = 0; i < consonants.length; i++) {
    if (str10.includes(consonants[i])) {
        str10 = str10.replaceAll(consonants[i], '');
    }
}
console.log(str10);
