// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)

let arr = [];

// for(let i=0;i<Infinity;i++){
//     arr.push(prompt('введите значение элемента'));
//     if(arr.length==5){
//         break;
//     }
// }
// console.log(arr);

let i = 0;
while (i <Infinity) {
    arr.push(prompt("ввод"));
    if (arr.length == 5) {
        break;
    }
    i++;
}
console.log(arr);