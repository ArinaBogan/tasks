// Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().

abstract class Animal{
    abstract makeSound():string;
};

class Dog extends Animal{
    makeSound() :string{
        return 'gav'
    }
}

class Cat extends Animal{
    makeSound():string {
        return 'myu'
    }
}

const dog=new Dog();
console.log(dog.makeSound());
const cat=new Cat();
console.log(cat.makeSound());

