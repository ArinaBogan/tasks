// На вход программе подается строка текста содержащая “@”. Напишите
// программу, которая удаляет все вхождения символа “@”. Добавить проверки
// 123@1@@34 -> 123134

const str = '123@1@@34';
let res = ' ';

for (let i = 0; i < str.length; i++) {
    if (str[i] != '@') {
        res += str[i];
    }
}
console.log(res);