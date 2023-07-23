// На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество 

const obj = {
    name: 'Arina',
    surname: 'Bogan',
    age: 20,
    height: 167
}

let count = 0;
for (let key in obj) {
    if (!isNaN(obj[key])) {
        count++
    }
}
console.log(count);