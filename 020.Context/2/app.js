// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const num = +prompt('введите количество элементов массива');

function doArray(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        let str = prompt('введите элемент массива');
        if (isNaN(str)) {
            arr.push(str);
        } else {
            console.log('введите строку');
        }
    }
    return arr;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.lenght; i++) {
        if (arr[i].length > max.lenght) {
            max = arr[i];
        }
    }
    return max;
}

const array_new = doArray(num);
const result = findMax(array_new);
console.log(result);
