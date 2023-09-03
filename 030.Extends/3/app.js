// Реализуйте класс Singer, который будет наследоваться от класса Worker. Класс
// Worker состоит из: свойства name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname, years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo через класс Singer

class Worker {
    name;
    surname;
    getFullName() {
        return `${this.name} ${this.surname}`
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
}

class Singer extends Worker {
    years;
    birth;
    style;
    getMoreInfo() {
        return `${this.name} ${this.years} ${this.birth} ${this.style}`
    }
    setYears(years) {
        this.years = years;
    }
    setBirth(birth) {
        this.birth = birth;
    }
    setStyle(style) {
        this.style = style;
    }
}
const singer = new Singer();
singer.setName('Arina');
singer.setSurname('Bogan');
singer.setYears(20);
singer.setBirth('28.09');
singer.setStyle('classic');

console.log(singer.getFullName());
console.log(singer.getMoreInfo());