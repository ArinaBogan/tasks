// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.middleware()
    }

    middleware() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            try {
                const inp = document.querySelector('input').value;
                if (!/^[\w\.\-\_]+@[a-z]+\.[a-z]{2,5}$/gm.test(inp))throw new Error('некорректно введена почта');
                alert(true);
            } catch (error) {
                alert(error.message)
            }
        })
    }
}
const domHtml=new DomHtml();