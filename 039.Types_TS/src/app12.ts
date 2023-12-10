// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const arr12: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum12: number = 0;

for (let i: number = 0; i = arr12.length; i++) {
    if (i % 2 != 0) {
        sum12 += arr12[i];
    }
}
console.log(sum12);
