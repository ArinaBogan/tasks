// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function doCheck(a) {
    let res = a.every(function (el) {
        return !isNaN(el) ? true : false;
    })
    return res;
}
const check = doCheck(arr);

if (check == true) {
    function evenNum(a) {
        let res = []
        a.forEach(function (el) {
            el % 2 == 0 ? res.push(el) : null;
        })
        return res;
    }
    const num = evenNum(arr);
    console.log(num);
} else {
    console.log('введите числа');
}

