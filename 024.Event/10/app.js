const inp = document.querySelector('input');
const block = document.querySelector('.block');
const unlock = document.querySelector('.unlock');

block.addEventListener('click', function () {
    inp.disabled = true;
})

unlock.addEventListener('click', function () {
    inp.disabled = false;
})
