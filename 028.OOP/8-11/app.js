// Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.
// Дополнить класс Validator. Добавить метод isURL для проверки на url.
// Дополнить класс Validator. Добавить метод isDate для проверки на дату.
// Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

class Validator {
    isEmail(str) {
        try {
            if (!/^[a-z0-9_\.-]+@[a-z]+\.[a-z]{1,3}$/gm.test(str))
                throw new Error(`почта введена некорректно`);
            return true;
        } catch (error) {
            return error.message;
        }
    }

    isURL(url) {
        try {
            if (!/^(http|https):\/\/[\w]+\.[a-z]{2,4}\/$/gm.test(url))
                throw new Error(`URL введен некорректно`);
            return true;
        } catch (error) {
            return error.message;
        }
    }

    isDate(date) {
        try {
            if (!/^[0-3][0-9]\.[0-1][0-9]\.[0-9]+$/gm.test(date))
                throw new Error('дата введена некорректно');
            return true;
        } catch (error) {
            return error.message;
        }
    }

    isPhone(number) {
        try {
            if (/^(\+375)[0-9]{9}$/gm.test(number))
                throw new Error('номер телефона введен неверно');
            return true;
        } catch (error) {
            return error.message;
        }
    }
}
const validator = new Validator();
const email = validator.isEmail('arina.bogan@gmail.com');
console.log(email);
const url = validator.isURL('https://github.com/');
console.log(url);
const date = validator.isDate('28.09.2002');
console.log(date);
const num = validator.isPhone('+3752911111111');
console.log(num);