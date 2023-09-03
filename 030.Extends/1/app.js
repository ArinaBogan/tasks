// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
    nameOfEmployee;
    numOfEmployee;

    getNameOfEmployee() {
        return this.nameOfEmployee;
    }
    getNumOfEmployee() {
        return this.numOfEmployee;
    }
    setNameOfEmployee(nameOfEmployee) {
        this.nameOfEmployee = nameOfEmployee;
    }
    setNumOfEmployee(numOfEmployee) {
        this.numOfEmployee = numOfEmployee;
    }
}

class ProductionWorker extends Employee {
    numOfChange;
    rateOfChange;

    getNumOfChange() {
        return this.numOfChange;
    }
    getRateOfChange() {
        return this.rateOfChange;
    }
    setNumOfChange(numOfChange) {
        this.numOfChange = numOfChange;
    }
    setRateOfChange(rateOfChange) {
        this.rateOfChange = rateOfChange;
    }
}
const productionWorker = new ProductionWorker();
productionWorker.setNameOfEmployee('Arina');
productionWorker.setNumOfEmployee(1);
productionWorker.setNumOfChange(2);
productionWorker.setRateOfChange(100);
console.log(productionWorker.getNameOfEmployee());
console.log(productionWorker.getNumOfEmployee());
console.log(productionWorker.getNumOfChange());
console.log(productionWorker.getRateOfChange());