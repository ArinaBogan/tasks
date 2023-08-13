// На вход подается строка в виде электронной почты пользователя. Необходимо
// написать регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать

const email = 'arina.bogan@gmail.com';

function testEmail(email) {
    try {
        if (!/^[\w\.\-\$]+@+[a-z]+\.[a-z]{2,4}$/g.test(email))
            throw new Error('почта введена некорректно');
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = testEmail(email);
console.log(result);
