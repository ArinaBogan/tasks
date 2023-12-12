// Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в конструкторе класса. Создайте
// несколько экземпляров класса Student и выведите свойства.

class Student3 {
    name: string;
    age: number;
    constructor(a: string, b: number) {
        this.name = a;
        this.age = b;
    }
}
const student3 = new Student3('Arina', 21);

console.log(student3.name);
console.log(student3.age);