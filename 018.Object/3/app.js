// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    1: 'test',
    2: 'test2',
    name: 'hschool',
    age: 20
}

for (let key in obj) {
    if (!isNaN(obj[key])) {
        console.log(obj[key]);
    }
}
