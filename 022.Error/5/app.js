// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = prompt('введите количество элементов массива');

function doArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

function isValid(arr) {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) throw new Error('введена строка');
        }
    } catch (error) {
        return error.message;
    }
}

function doNewArray(arr) {
    let new_arr = arr.filter(function (el) {
        if (el > 10 && el < 100) return true;
    })
    return new_arr;
}

const arr = doArray(n);
const check = isValid(arr);
const new_arr = doNewArray(arr);
console.log(new_arr);
