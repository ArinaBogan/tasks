// На вход число. Необходимо вывести все числа от 1 до введенного числа. Добавить
// проверку вводимого значения, если это текст –> сообщение об ошибке

const a = +prompt('введите число');

if (isNaN(a)) {
    console.log('ошибка ввода');
} else {
    for (let i = 1; i <= a; i++)
        console.log(i);
}