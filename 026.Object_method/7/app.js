// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1**0+2**1+3**2+4**3+5**4

const num = '12345';

function doArray(num) {
    let arr = num.split('');
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr.push(arr[i] ** i);
    }
    return new_arr;
}

const new_arr = doArray(num);
console.log(new_arr);

function doSum(new_arr) {
    const res = new_arr.reduce(function (sum, el) {
        return sum + el;
    }, 0)
    return res;
}

const result = doSum(new_arr);
console.log(result);

