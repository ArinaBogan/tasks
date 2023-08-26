// Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда. 

let str = `let obj = {}
/*rfurk kfkowrw ijor*/
const n = Math.round(Math.random() * 10)`

function deleteComm(str) {
    try {
        let new_str = str.replaceAll(/^[\/\*\w\s]+$/gm, '');
        if (str.length == new_str.length) throw new Error('строка не изменилась');
        return new_str;

    } catch (error) {
        return error.message;
    }
}
const result = deleteComm(str);
console.log(result);