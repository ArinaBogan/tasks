// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные (те которые выведены 1 раз)
// значения массива -> [1, 5] (for)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
console.log(arr);
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
        res.push(arr[i]);
    }
}
console.log((res));