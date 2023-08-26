// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const btn = document.querySelector('button');
const arr = [];
let new_arr = [];

btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const array = document.querySelector('.array');
    const uniq = document.querySelector('.result');

    arr.push(inp.value);
    array.innerHTML = arr;
    inp.value = '';

    for (let i = 0; i < arr.length; i++) {
        if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i]);
        }
    }
    uniq.innerHTML = new_arr;
})