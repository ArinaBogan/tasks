// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
let sentence = 'hello world'.toLowerCase().split(' ');
let newSentence = '';
for (let i = 0; i < sentence.length; i++) {
    newSentence += sentence[i][0].toUpperCase() + sentence[i].slice(1) + ' ';
}
console.log(newSentence);
