// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

function changeString() {
    const str = prompt('введите строку').toLowerCase().split('');
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            result+=str[i].toUpperCase();
        }else{
            result+=str[i].toLowerCase();
        }
    }
    return result;
}
const new_str=changeString();
console.log(new_str);