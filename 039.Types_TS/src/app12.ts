// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const arr12: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr12: number[] = [];

for (let i: number = 0; i <arr12.length; i++) {
    if (i % 2 !== 0) {
        newArr12.push(arr12[i])
    }
}
const res12: number = newArr12.reduce((sum: number, el: number) => {
    return sum + el
}, 0)
console.log(res12);
