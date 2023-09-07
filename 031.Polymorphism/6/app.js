// Реализуйте класс Client, содержащий метод sendRequest. Ваша задача получить
// данные из 2 инпутов: почта и пароль и по клику на кнопку «отправить запрос на
// сервер» (отправку запроса мы не проходили => просто вывести на экран
// образовавщийся объект вида: {email: email, pwd: pwd}

class Client {
    sendRequest() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            const pwd = document.querySelector('.pwd');
            const email = document.querySelector('.email');
            const div = document.querySelector('div');
            const obj = {};
            obj.email = email.value;
            obj.pwd = pwd.value;
            div.innerHTML = JSON.stringify(obj);
        })
    }
}
const client = new Client();
client.sendRequest();