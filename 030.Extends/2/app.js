// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте методы получатели и модификаторы экземпляра класса
// Customer
class Person {
    name;
    address;
    phoneNum;

    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getPhoneNum() {
        return this.phoneNum;
    }
    setName(name) {
        this.name = name;
    }
    setAddress(address) {
        this.address = address;
    }
    setPhoneNum(phoneNum) {
        this.phoneNum = phoneNum;
    }
}

class Customer extends Person {
    numOfClient;
    bool;
    getNumOfClient() {
        return this.numOfClient;
    }
    getBool() {
        return this.bool;
    }
    setNumOfClient(numOfClient) {
        this.numOfClient = this.numOfClient;
    }
    setBool(bool) {
        this.bool = bool;
    }
}
const customer = new Customer();
customer.setName('Arina');
customer.setAddress('Minsk');
customer.setPhoneNum('111111111');
customer.setNumOfClient(3);
customer.setBool(true);

const name = customer.getName();
const address = customer.getAddress();
const phone = customer.getPhoneNum();
const client = customer.getNumOfClient();
const bool = customer.getBool();
console.log(name, address, phone, client, bool);
