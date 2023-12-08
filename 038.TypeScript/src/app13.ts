// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".

let sentence: string[] = 'hello world'.toLowerCase().split(' ');
let newSentence: string = '';

for (let i: number = 0; i < sentence.length; i++) {
    newSentence += sentence[i][0].toUpperCase() + sentence[i].slice(1) + ' ';
}
console.log(newSentence);


