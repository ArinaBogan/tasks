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
    name: string = 'Tom';
    private age: number = 2;
    private color: string = 'white';

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getColor(): string {
        return this.color;
    }
}
const cat1 = new Cat1();

console.log(cat1.getAge());
console.log(cat1.getColor());
console.log(cat1.getName());


