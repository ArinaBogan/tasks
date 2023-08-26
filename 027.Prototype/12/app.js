// Реализуйте функцию, которая будет считать количество своих вызовов

function count() {
    let count = 0;
    return function () {
        count++
        console.log(count);
    }
}

const result=count()
result();
result();
result();
result();