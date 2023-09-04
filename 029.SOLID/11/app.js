// Реализуйте класс Сonversion, сдержащий метод doOctalNumber, преобразующий
// все числа 10 системы счисления в 8
class Conversion {
    doOctalNumber(num) {
        console.log(num.toString(8));
    }
}
const conversion = new Conversion();
conversion.doOctalNumber(42);