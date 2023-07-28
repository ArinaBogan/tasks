// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const str = 'AF123@asd456';

function checkPassword(password) {
    let specSymbol;
    let upperCase;
    let includeNum;
    let includeLetter;
    let passLenght;

    if(password.includes('@') || password.includes('$') || password.includes('#')){
        specSymbol = true;
    }else{
        specSymbol = false;
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i] == password[i].toUpperCase()) {
            upperCase = true;
            break;
        } else {
            upperCase = false;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            includeNum = true;
            break;
        } else {
            includeNum = false;
        }
    }
    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            includeLetter = true;
            break;
        } else {
            includeLetter = false;
        }
    }

    password.length >= 8 ? (passLenght = true) : (passLenght = false);

    return specSymbol == true &&
        upperCase == true &&
        includeNum == true &&
        includeLetter == true &&
        passLenght == true ?
        'надежный пароль' : 'ненадежный пароль';
}

const result = checkPassword(str);
console.log(result);