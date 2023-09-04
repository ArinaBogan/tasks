// Реализуйте класс Сonversion, сдержащий метод doBinaryNumber, преобразующий
// все числа 2 системы счисления в 10
class Conversion{
    doBinaryNumber(num){
        console.log(parseInt(num,2));
    }
}
const conversion=new Conversion();
conversion.doBinaryNumber(101010)