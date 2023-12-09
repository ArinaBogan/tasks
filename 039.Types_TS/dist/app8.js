// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const str8 = ['hello', 'my', 'name', 'is', 'ann'];
let res8 = str8.filter((el) => { return el == el.split('').reverse().join(''); });
console.log(res8);
