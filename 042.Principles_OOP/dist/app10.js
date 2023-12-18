// Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console.
class Pwd {
    showPwd() {
        let pwd = '';
        for (let i = 0; i < 8; i++) {
            pwd += (Math.round(Math.random() * 10));
        }
        return pwd;
    }
}
class Validation_ extends Pwd {
    showPwd() {
        const result = super.showPwd();
        return result.split('').join('');
    }
}
const pwd = new Pwd();
console.log(pwd.showPwd());
const validation_ = new Validation_();
console.log(validation_.showPwd());
