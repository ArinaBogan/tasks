// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const div = document.querySelector('div');
const arr = [];

for (let i = 0; i < 15; i++) {
    arr.push(Math.round(Math.random() * 100))
}
div.innerHTML = arr;

div.addEventListener("click", function (event) {
    let value = event.target;
    div.remove(value);
});