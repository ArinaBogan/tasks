// Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    balance: number;
    deposit(a: number): void;
    withdraw(b: number): void;
}

class Account implements iAccount {
    balance: number = 0;
    deposit(a: number): void {
        this.balance += a;
    }
    withdraw(b: number): void {
        this.balance -= b;
    }
}

const account = new Account();
account.deposit(100);
account.deposit(200);
account.withdraw(50);

console.log(account.balance);
