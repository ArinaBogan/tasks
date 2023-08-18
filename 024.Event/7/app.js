// Записать в результат удвоенное значение инпута. Добавить проверки 

const btn = document.querySelector('button');

function isValid(inp) {
    if ((!inp.value) || (isNaN(inp.value))) throw new Error('введите число');
}

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        isValid(inp);
        const result = document.querySelector('.count');
        result.innerHTML = inp.value * 2;
    } catch (error) {
        alert(error.message)
    }
})