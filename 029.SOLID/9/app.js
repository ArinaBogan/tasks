// Реализуйте класс Сonversion, сдержащий метод do DecimalNumber, преобразующий
// все числа 10 системы счисления в 2

class Conversion{
    doDecimalNumber(num){ 
        console.log(num.toString(2));
    }
}
const conversion=new Conversion();
conversion.doDecimalNumber(42);
