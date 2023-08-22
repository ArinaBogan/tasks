// По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let first = document.querySelector('.first');
    let second = document.querySelector('.second');

    const a = first.value;
    const b = second.value;

    first.value = b;
    second.value = a;
})
