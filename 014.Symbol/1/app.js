// Подается строка из нескольких слов. Необходимо добавить тире между словами 

const a = prompt('введите строку');

console.log(a.split(' ').join('-'));

console.log(a.replaceAll(' ','-'));