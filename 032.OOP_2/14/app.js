// Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем напишите
// класс Customer, который является подклассом класса Person. Класс Customer
// должен иметь поле телефонного номера человека. Продемонстрируйте экземпляр
// класса Customer вызвав геттеры и сеттеры собственного класса и базового

class Person {
    name;
    surname;

    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }

    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
}

class Customer extends Person {
    num;

    getNum() {
        return this.num;
    }
    setNum(num) {
        this.num = num;
    }
}
const customer = new Customer();
customer.setName('Arina');
customer.setSurname('Bogan');
customer.setNum('111111111');


const name = customer.getName();
const surname = customer.getSurname();
const phone = customer.getNum();
console.log(name, surname, phone);
