// Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

const arr16: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i: number = 0; i < arr16.length; i++) {
    if (arr16[i] < arr16[i + 1]) {
        console.log(true);
    } else {
        console.log(false);

    }
}