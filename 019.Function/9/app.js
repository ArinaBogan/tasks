// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function doCheck(a) {
    let res = a.every(function (el) {
        return !isNaN(el) ? true : false;
    })
    return res;
}
const check = doCheck(arr);

if (check==true){
    function doResult(a){
        let res=a.map(function(el){
            return el*2;
        })
        return res;
    }
    const result=doResult(arr);
    console.log(result);
}else{
    console.log('введите числа');
}
