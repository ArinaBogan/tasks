// На входе статичный объект. Необходимо вывести все четные значения объекта.

const obj = {
    name1: 1,
    name2: 2,
    name3: 3,
    name4: 4,
    name5: 5,
    name6: 6
}

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        console.log(obj[key]);
    }
}