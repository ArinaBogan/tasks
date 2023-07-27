// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива

const n=prompt('введите количество элементов массива');
const arr=[];

function doArray(a){
    for (let i = 0; i < a; i++) {
        let el = prompt('введите элемент');
        arr.push(el);
    }
    return arr;
}

function findLength(array){
    return array.length;
}

const result=doArray(n);
const result_1=findLength(arr);
console.log(result);
console.log(result_1);
