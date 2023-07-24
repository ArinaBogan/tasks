// На входе статичный объект с повторяющимися значениями. Необходимо
// // отфильтровать значения объекта и оставить только уникальные значения
// 0 : 7,
// 1 : 6,
// 2 : 5,
// 3 : 2,
// 4 : 1

const obj = {
    0: 7,
    1: 7,
    2: 6,
    3: 5,
    4: 2,
    5: 2,
    6: 1
}

const arr = [];
for (let key in obj) {
    arr.push(obj[key]);
}
console.log(arr);

const arr_new = [];
for (let i = 0; i < arr.length; i++) {
    if (!arr_new.includes(arr[i])) {
        arr_new.push(arr[i]);
    }
}
console.log(arr_new);

const obj_new = {};
for (let i = 0; i < arr_new.length; i++) {
    obj_new[i] = arr_new[i];
}
console.log(obj_new);
