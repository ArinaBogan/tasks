// Создайте переменную password и присвойте ей строковое значение. Если длина
// пароля больше 8 символов, выведите сообщение "Пароль надежный", иначе
// выведите сообщение "Пароль слишком короткий".

const password: string = prompt('введите пароль');
//1
if (password.length > 8) {
    console.log('Пароль надежный');
} else {
    console.log('Пароль слишком короткий');
}

//2
console.log(password.length > 8 ? 'Пароль надежный' : 'Пароль слишком короткий');

//3
if (/^[0-9a-zA-Z]{8,}/gm.test(password)) {
    console.log('Пароль надежный');
} else {
    console.log('Пароль слишком короткий');
}
