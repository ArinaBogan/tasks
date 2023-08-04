// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = 'QWas123@zxuuu';

function checkPassword(a) {
    if (a.length < 8) return 'недостаточно символов';
    let countNum = 0;
    let countToUpperCase = 0;
    let countToLowerCase = 0;
    let countSymbol = 0;
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            countNum++;
        } else {
            a[i].toUpperCase() == a[i] ? countToUpperCase++ : countToLowerCase++;
        }
    }
    if (a.includes('@') || a.includes('#') || a.includes('-') || a.includes('$') ) {
        countSymbol++;
    }
    if (countNum == 0 || countToLowerCase == 0 || countToUpperCase == 0 || countSymbol == 0) {
        return 'ненадежный пароль';
    } else {
        return 'надежный пароль';
    }
}
let result = checkPassword(str);
console.log(result);