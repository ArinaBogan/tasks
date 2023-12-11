// На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const num13: number = +prompt('введите число');
const arr13: number[] = [];

for (let i: number = 0; i < num13; i++) {
    arr13.push(+prompt('введите элементы массива'))
}

const res13:string[] = arr13.map((el: number) => {
    if (+el % 2 == 0) {
        return 'чет'
    } else {
        return 'нечет'
    }
})
console.log(res13);
