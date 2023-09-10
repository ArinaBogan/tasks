// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое

const btn = document.querySelector('button');
const arr = [];

function isValid(inp) {
    if (!inp) {
        throw new Error('введите значение');
    }
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const div = document.querySelector('div');

        isValid(inp.value);
        arr.push(inp.value);
        div.innerHTML = arr;
        inp.value = '';
    } catch (error) {
        alert(error.message);
    }
});