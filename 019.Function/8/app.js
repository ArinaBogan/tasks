// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ['h', 'e', 'l', 'l', 'o'];

function doCheck(a) {
    let res = a.every(function (el) {
        return isNaN(el) ? true : false;
    })
    return res;
}
const check = doCheck(arr);

if (check == true) {
    function doSum(b) {
        let sum = b.reduce(function (sum, el) {
            return sum += el;
        }, '');
        return sum;
    }
    const sum = doSum(arr);
    console.log(sum);
}
else {
    console.log('введите другие значения');
}

