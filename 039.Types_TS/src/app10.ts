// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

const arr10: string[] = ['hello', 'world'];
const consonants: string = 'qwrtpsdfghjklzxcvbnm';
let str10: string = ''

for (let i: number = 0; i < arr10.length; i++) {
    str10 += arr10[i] + ' '
}
console.log(str10);

for (let i: number = 0; i < consonants.length; i++) {
    if (str10.includes(consonants[i])) {
        str10 = str10.replaceAll(consonants[i], '')
    }
}
console.log(str10);
