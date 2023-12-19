// Создайте класс Cat, представляющий кошку. У класса Cat должны быть приватные
// свойства name, age и color. Реализуйте методы getName, getAge и getColor,
// которые будут возвращать соответствующие свойства. Создайте несколько
// объектов класса Cat и выведите их данные.
// interface iCat1 {
//     name: string;
//     age: number;
//     color: string;
//     getName(): string;
//     getAge(): number;
//     getColor(): string;
// }
class Cat1 {
    name = 'Tom';
    age = 2;
    color = 'white';
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getColor() {
        return this.color;
    }
}
const cat1 = new Cat1();
console.log(cat1.getAge());
console.log(cat1.getColor());
console.log(cat1.getName());
