// Вычислите сумму массива чисел статичного массива используя рекурсию
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doSum(arr) {
    if (arr.length == 0) return 0;
    return arr[0] + doSum(arr.slice(1));
}
const result = doSum(arr);
console.log(result);