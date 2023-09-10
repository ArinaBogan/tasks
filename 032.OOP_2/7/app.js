// Вывести в строчку все вводимые значения через инпут в виде массива, а также
// все удвоенные значения данного массива в div ниже. Добавить проверку, что
// поле не пустое

const btn = document.querySelector('button');
const arr = [];

function isValid(inp) {
    if (!inp) throw new Error('введите значение');
}
btn.addEventListener('click', function () {
    const inp = document.querySelector('input');
    const divArray = document.querySelector('.array');
    const divResult = document.querySelector('.result');
    try {
        isValid(inp.value);

        arr.push(inp.value);
        divArray.innerHTML = arr;

        let res = arr.map(function (el) {
            return el * 2;
        })
        divResult.innerHTML = res;
        inp.value = '';
    } catch (error) {
        alert(error.message);
    }
})