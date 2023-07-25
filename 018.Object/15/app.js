// На входе массив чисел. На основе этого массива сформировать объект, где ключ –
// число массива, значение – true/false. True – число четное, false – нечетное 

const arr = [2, 30, 4, 25, 16, 10];
const obj = {};

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        obj[arr[i]] = true
    } else {
        obj[arr[i]] = false;
    }
}
console.log(obj);