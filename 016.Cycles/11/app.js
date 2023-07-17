// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = [10, 'text', 15, null, 20, true];
let res = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        res.push(arr[i]);
    }
}
console.log(res);