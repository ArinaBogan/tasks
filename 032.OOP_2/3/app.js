// Написать функцию на подсчет количества пар ключ значение в объекте. Добавить
// проверки
const obj = {
    id: 1,
    name: 'Arina',
    surname: 'Bogan'
}

function doCount(obj) {
    let count = 0;
    for (let key in obj) {
        count++
    }
    return count;
}
const result = doCount(obj);
console.log(result);


// const value = Object.values(obj);
// console.log(value.length);