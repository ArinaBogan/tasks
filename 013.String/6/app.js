// На вход программе подается строка текста. Напишите программу, которая
// проверяет, что строка заканчивается подстрокой .com или .ru. Если заканчивается,
// то вывести true, в противном случае false

let a = prompt('введите строку');

if (!isNaN(a)) {
    console.log('ошибка ввода');
} else {
    console.log(a.includes('.com') || a.includes('.ru') ?
        true : false);
}