// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

class CheckValue {
    testUrl(url) {
        try {
            if (!/^(http|https):\/\/[a-z0-9]+\.[a-z]{2,4}\/$/g.test(url))
                throw new Error('введите корректное значение');
            return true;
        } catch (error) {
            return error.message;
        }
    }
}
const checkValue = new CheckValue();
console.log(checkValue.testUrl('https://regex101.com/'));