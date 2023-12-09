// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

const str8: string[] = ['hello', 'my', 'name', 'is', 'ann'];

let res8: string[] = str8.filter((el: string) => { return el == el.split('').reverse().join('') })
console.log(res8);

