// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 3, 4, 5];

function doCheck(a) {
    let res = a.every(function (el) {
        return !isNaN(el) ? true : false;
    });
    return res;
}
const check = doCheck(arr);

if (check == true) {
    function doSum(b) {
        let sum = b.reduce(function (sum, el) {
            return sum += el;
        }, 0);
        return sum;
    }
    const sum = doSum(arr);
    console.log(sum);}
    else {
        console.log('введите другие значения');
    }

    

