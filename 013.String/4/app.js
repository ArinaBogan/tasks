// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

const a = 'HTML JavaScript PHP'.toUpperCase();

console.log(a.split(' ').join('-'));

console.log(a.replaceAll(' ','-'));