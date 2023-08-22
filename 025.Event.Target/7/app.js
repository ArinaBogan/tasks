// *Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка), 
// с помощью которой можно будет добавить нового значение в таблицу. 

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    try {
        const inp = document.querySelector('input');
        const tableBody = document.querySelector(".table");
        const addTr = document.createElement('tr');
        const addTd = document.createElement('td');

        if (!inp.value) throw new Error('введите значение');
        addTd.innerHTML = inp.value;

        addTr.appendChild(addTd);
        tableBody.appendChild(addTr);

        inp.value = '';
    } catch (error) {
        alert(error.message);
    }
})
