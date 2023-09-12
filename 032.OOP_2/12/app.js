// Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
// getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная строка
// корректным email (Если является - возвращает true, если не является - false.
// Вызвать из экземпляра класса методы setEmail. getEmail, isEmail

class Validator {
    email
    getEmail() {
        return this.email;
    }
    isEmail() {
        try {
            if (!/^[\w\.\-\$]+@+[a-z]+\.[a-z]{2,4}$/g.test(this.email))
                throw new Error('почта введена некорректно');
            return true;
        } catch (error) {
            return error.message;
        }
    }
    setEmail(email) {
        return this.email = email;
    }
}
const validator = new Validator();
validator.setEmail('arina.bogan@gmail.com');
console.log(validator.isEmail());
