// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

let a = 'aaa bbb ccc';
let first_index = a.indexOf('b');
let last_index = a.lastIndexOf('b');

console.log(a.slice(first_index,last_index+1));
