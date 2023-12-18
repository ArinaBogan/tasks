// Создайте базовый класс Person, представляющий человека. У класса Person
// должны быть свойства name и age. Создайте класс Student, наследующийся от
// Person, и добавьте ему свойство averageGrade. Реализуйте методы getName,
// getAge и getAverageGrade в классе Student. Создайте несколько объектов класса
// Student и выведите их данные.

interface iPerson {
    name: string;
    age: number;
}
interface iStudent_ {
    averageGrade: number;
    getName(): string;
    getAge(): number
    getAverageGrade(): number;
}

class Person implements iPerson {
    name: string;
    age: number;
}

class Student_ extends Person implements iStudent_ {
    averageGrade: number;
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getAverageGrade(): number {
        return this.averageGrade;
    }
}

const student_ = new Student_();
student_.name = 'Arina';
student_.age = 21;
student_.averageGrade = 10;
console.log(student_.getAge());
console.log(student_.getName());
console.log(student_.getAverageGrade());


