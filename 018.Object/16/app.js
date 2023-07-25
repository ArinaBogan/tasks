// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
    name: '',
    age: '',
    birthday: '',
    weight: '',
    height: ''
}

for (let key in obj) {
    obj[key] = prompt(`введите значение ${key}`);
}
console.log(obj);

const arr = [];
for (let key in obj) {
    if (!isNaN(obj[key])) {
        arr.push(obj[key])
    }
}
console.log(arr);