// Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics
class PasswordGenerator {
    pwd = '';
    generatePassword(n) {
        if (typeof n == 'number')
            for (let i = 0; i < n; i++) {
                this.pwd += (Math.round(Math.random() * 10));
            }
        console.log(this.pwd);
    }
}
const passwordGenerator = new PasswordGenerator();
passwordGenerator.generatePassword(5);
