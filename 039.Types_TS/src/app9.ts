// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

const arr9: (number | string)[] = [1, 2, 3, 1, 'a', 'b', 'c', 'a'];
const res9: (number | string)[] = [];

for (let i: number = 0; i < arr9.length; i++) {
    if (!res9.includes(arr9[i])) res9.push(arr9[i])
}
console.log(res9);
