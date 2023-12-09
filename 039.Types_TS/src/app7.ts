// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 

const arr7: any = [];
const res7: number[] = [];

for (let i: number = 0; i < 5; i++) {
    arr7.push(prompt('введите значения массива'))
    if (!isNaN(arr7[i])) {
        res7.push(arr7[i])
    }
}
console.log(res7);
