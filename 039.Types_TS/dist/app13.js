// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const num13 = +prompt('введите число');
const arr13 = [];
for (let i = 0; i < num13; i++) {
    arr13.push(+prompt('введите элементы массива'));
}
const res13 = arr13.map((el) => {
    if (+el % 2 == 0) {
        return 'чет';
    }
    else {
        return 'нечет';
    }
});
console.log(res13);
// const resultArray13: string[] = arrayNums13.map((el: number) => {
//     if (+el % 2 === 0) {
//         return `${el} чет`;
//     } else {
//         return `${el} нечет`;
//     }
// });
// console.log(resultArray13);
