// Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
// распознать по какому из значений контейнера производится событие клика. Если
// клик происходит, то удалить данное значение из массива в div

const div = document.querySelector('div');
const arr = [];

function doArray(n) {
    for (let i = 0; i < n; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    div.innerHTML = arr;
}
const res = doArray(15);

function deleteElement(res) {
    div.addEventListener('click', function (target) {
        event.target.remove();
    })
}
const result = deleteElement(res);
