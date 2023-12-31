// Банкоматы позволяют использовать 4 или 6 значные PIN-коды, а PIN-коды не
// могут содержать ничего, кроме ровно 4 или ровно 6 цифр. Необходимо написать
// регулярное выражение для данной строки. Если же строка подходит под
// регулярное выражение, то вывести булевое true, в противном случае бросить
// исключение и обработать
// "1234“ -> true
// "12345“ -> false
// "a234“ -> false

const pin = prompt('введите пин-код из 4 или 6 цифр');

function checkPin() {
    try {
        if (!/^[0-9]{4}$/g.test(pin) && !/^[0-9]{6}$/g.test(pin))
            throw new Error('неверный пин-код')
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = checkPin(pin);
console.log(result);