// Дана строка состоящая из чисел, букв, специальных символов. Необходимо
// оставить в строке только буквенные символы используя регулярные выражения.
// Если же длина исходной строки изменилась, вывести true, в противном случае
// бросить исключение и обработать

const str = '5215#6abc_123$';

function testStr(str) {
    try {
        let new_str = str.replaceAll(/[0-9_$!#%&*+]/g, ' ');
        if (str.length !== new_str.length) throw new Error('строка изменилась');
        return new_str.trim();
    } catch (error) {
        return error.message;
    }
}
const result = testStr(str);
console.log(result);