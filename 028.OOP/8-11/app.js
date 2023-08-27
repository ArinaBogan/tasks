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
}
const validator = new Validator();
const email = validator.isEmail('arina.bogan@gmail.com');
console.log(email);
const url = validator.isURL('https://github.com/');
console.log(url);
