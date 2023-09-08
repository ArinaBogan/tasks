// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const n = 3;
const arr=[];

function doArray(n) {
    for (let i = 0; i < n; i++) {
        arr.push(prompt('введите элемент'));
    }
    return arr;
}
const result = doArray(n);

function filterArray(result) {
    let newArr = result.map((el) => '#' + el);
    return newArr;
}
const res=filterArray(result)
console.log(res);