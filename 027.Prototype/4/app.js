// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const btn = document.querySelector('button');
const inp = document.querySelector('input');

btn.addEventListener('click', function () {
    const result = document.querySelector('div');

    let str = inp.value.split(' ');
    let strCamel = '';

    for (let i = 0; i < str.length; i++) {
        strCamel += str[i][0].toUpperCase() + str[i].slice(1);
    }

    result.innerHTML = strCamel;
}
)