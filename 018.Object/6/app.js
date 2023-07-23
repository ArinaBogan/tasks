// На входе статичный объект. Необходимо числовые значения удвоить на выходе.

const obj = {
    name1: 'one',
    name2: 2,
    name3: 3,
    name4: 4,
    name5: 5,
    name6: 6
}

const arr = [];

for (let key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key] * 2)
    }
}
console.log(arr);