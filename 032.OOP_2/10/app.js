// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const btn = document.querySelector('button');
const div = document.querySelector('div');
let arr = [];

function isValid(inp) {
    if (!inp) throw new Error('пустая строка');
}
btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');

        isValid(inp.value);
        arr.push(inp.value);
        div.innerHTML = arr;
        inp.value = '';
    } catch (error) {
        div.innerHTML = error.message;
        div.style = 'color:red'
    }
})