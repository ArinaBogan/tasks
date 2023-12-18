// Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
// инструмент. У класса MusicalInstrument должен быть метод play, который будет
// воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
// Drums, которые будут представлять гитару, пианино и ударные соответственно.
// Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
// инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
// вызовите метод play для каждого инструмента.
class MusicalInstrument {
}
class Guitar extends MusicalInstrument {
    play() {
        return 'guitar sound';
    }
}
class Piano extends MusicalInstrument {
    play() {
        return 'piano sound';
    }
}
class Drums extends MusicalInstrument {
    play() {
        return 'drums sound';
    }
}
const guitar = new Guitar();
console.log(guitar.play());
const piano = new Piano();
console.log(piano.play());
const drums = new Drums();
console.log(drums.play());
