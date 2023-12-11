// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.
const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr12 = [];
for (let i = 0; i < arr12.length; i++) {
    if (i % 2 !== 0) {
        newArr12.push(arr12[i]);
    }
}
const res12 = newArr12.reduce((sum, el) => {
    return sum + el;
}, 0);
console.log(res12);
