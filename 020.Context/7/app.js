// Работа с замыканием. Необходимо реализовать конкатенацию строк при каждом
// последующем вызове функции

function doConcatenation() {
    let str = '';
    return function () {
        str += 'hello ';
        console.log(str);
    }
}
const result=doConcatenation();

result();
result();
result();
result();
result();