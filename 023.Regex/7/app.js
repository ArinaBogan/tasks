// На вход подается строка в виде пароля. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать.
// Пароль должен содержать:
// • Буквы в UPPER регистре
// • Буквы в LOWER регистре
// • Числа
// • Специальные символы
// • Длина не менее 8 символов

const password = prompt('введите пароль');

function checkPassword() {
    try {
        if (!/^[A-Za-z0-9.$_"#]{8,}$/g.test(password) && password.length < 8)
            throw new Error('пароль введен некорректно');
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = checkPassword(password);
console.log(result);