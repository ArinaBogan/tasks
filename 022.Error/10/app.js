// На вход подается строка в виде электронной почты пользователя. Необходимо
// найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
// случае бросить исключение и его обработать

const pass = 'arina.bogan@gmail.com';

function checkPass(pass) {
    try {
        if (!pass.includes('@')) throw new Error('Вы ввели почту неверно');
        return true;
    } catch (error) {
        return error.message;
    }
}

const result = checkPass(pass);
console.log(result);