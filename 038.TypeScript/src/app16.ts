// На вход программе подается натуральное число n. Напишите программу, которая
// печатает звездный треугольник.
// 4 –>
// ****
// ***
// **
// *

const num16: number = +prompt('введите число');

for (let i: number = num16; i > 0; i--) {
    console.log('*'.repeat(i));
}