// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const div = document.querySelector('div');
const result = document.querySelector('.result');

for (let i = 0; i < 15; i++) {
    let num = (Math.round(Math.random() * 100));

    let li = document.createElement('li');
    div.appendChild(li);
    li.innerHTML = num;
}

div.addEventListener("click", function (event) {
    div.removeChild(event.target)
});