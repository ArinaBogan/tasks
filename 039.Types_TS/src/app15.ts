// На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

const n15: number = +prompt('введите количество элементов массива');
let arr15: string[] = [];

for (let i: number = 0; i < n15; i++) {
    arr15.push(prompt('введите слово'))
}

let newArr15: string[] = [];
arr15.forEach((el: string) => {
    newArr15.push('!' + el)
})
console.log(newArr15);
