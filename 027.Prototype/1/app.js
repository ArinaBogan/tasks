// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const btn = document.querySelector('button');
const arr = [];

function isValid(inp) {
    if (!inp) throw new Error('введено некорректное значение');
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const array = document.querySelector('.array');
        const result = document.querySelector('.result');

        isValid(inp.value);

        arr.push(inp.value);
        array.innerHTML = arr;
        inp.value = '';

        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }

        result.innerHTML = sum / arr.length;

    } catch (error) {
    } alert(error.message);

})






