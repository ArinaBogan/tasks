// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const n = Math.round(Math.random() * 10);

function doObj() {
    const obj = {};
    for (let i = 0; i < n; i++)
        obj[i] = Math.round(Math.random() * 10);
    return obj;
}

const object = doObj(n);
console.log(object);

function countKey(object) {
    let count = 0;
    for (let key in object)
        count++
    return count;
}

const result = countKey(object);
console.log(result);

