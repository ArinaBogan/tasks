const btn = document.querySelector('button');
let arr = [];

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        let result = document.querySelector('div');

        if (isNaN(inp.value) || (!inp.value)) throw new Error('введите число');
        arr.push(inp.value);
        result.innerHTML = arr;
    } catch (error) {
        alert(error.message);
    }
})