// На вход подается строка вида: путь к файлу. Необходимо написать регулярное
// выражение для данной строки. Если же строка подходит под регулярное
// выражение, то вывести булевое true, в противном случае бросить исключение и
// обработать
// C:\Users\Admin\Desktop\test.txt -> true
// C:/Users/Admin/Desktop/test.txt -> true

const str = 'C:/Users/Admin/Desktop/test.txt';

function isValid(str) {
    try {
        if (!/^[A-Z]:(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+(\\|\/)[A-Za-z]+\.[a-z]{1,5}$/g.test(str))
            throw new Error('неккоректно введено значение');
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = isValid(str);
console.log(result);