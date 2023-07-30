// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”. 

const date = '28/09/2002';

function changeDate(a) {
    a = a.replaceAll('/', '-').split('-').reverse().join('-');
    return a;
}

const result = changeDate(date);
console.log(result);

