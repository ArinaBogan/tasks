// Работа с замыканием. Реализуйте функцию, которая будет считать количество
// своих вызовов

function countNumber() {
    let count = 0;
    return function () {
        count += 1;
        console.log(count);
    }
}
const result = countNumber();

result();
result();
result();
result();
result();

