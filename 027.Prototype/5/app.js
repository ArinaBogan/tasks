// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const firstInp = document.querySelector('.first');
    const secondInp = document.querySelector('.second');
    const result = document.querySelector('div');

    let value1 = firstInp.value;
    let value2 = secondInp.value;

    let count = 0;
    for (let i = 0; i < value2.length; i++) {
        if (value1.includes(value2[i]))
            count++
    }

    if (count == value2.length) {
        result.innerHTML = true;
    } else {
        result.innerHTML = false;
    }

})