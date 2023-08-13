// На вход подается строка из 2 и более слов. Необходимо все симводы заменить на
// пустую строку. 

const str = 'arina@bogan';

function testStr(str) {
    try {
        let new_str = str.replaceAll(/[@-]/g, ' ');
        if (str.length == 0) throw new Error('пустая строка');
        return new_str;
    } catch (error) {
        return error.message;
    }
}
const result = testStr(str);
console.log(result);