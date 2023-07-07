// Дан статичный массив элементов. С помощью цикла for найдите произведение
// всех элементов массива

const arr = [1,3,5,7,9];
let result = 1;

for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);