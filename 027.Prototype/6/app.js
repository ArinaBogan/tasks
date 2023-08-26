// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
//     от 1 до n). Необходимо отобразить на экране объект (помните, что окно браузера
//     не воспринимает объекты как тип данных JavaScript. Для отображения неоходимо
//     преобразовать строку в ...)

const result = document.querySelector('div');

let obj = {};
const n = Math.round(Math.random() * 10);

for (let i = 0; i < n; i++) {
    obj[i] = Math.round(Math.random() * 10);
}

result.innerHTML = JSON.stringify(obj)

