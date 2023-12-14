// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const n15 = +prompt('введите количество элементов массива');
let arr15 = [];
for (let i = 0; i < n15; i++) {
    arr15.push(prompt('введите слово'));
}
let newArr15 = [];
arr15.forEach((el) => {
    newArr15.push('!' + el);
});
console.log(newArr15);
