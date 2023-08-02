// Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

const letter = prompt('введите букву');
const string = prompt('введите предложение');



function doSum(l, str) {
    let count = 0;
    if (isNaN(l) && isNaN(str)) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == l) {
                count++
            }
        }
        return count;
    } else {
        console.log('ошибка ввода');
    }
}

const result = doSum(letter, string);
console.log(result);
