// Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics
class StringManipulator {
    reverseString(str) {
        if (typeof str === "string")
            return (str.split('').reverse().join(''));
    }
    isPalindrome(str) {
        if (typeof str === "string")
            return str == str.split('').reverse().join('') ? true : false;
    }
    countVowels(str) {
        const vowels = 'aeyuio';
        let count = 0;
        if (typeof str == "string")
            for (let i = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    count++;
                }
            }
        return count;
    }
}
const stringManipulator = new StringManipulator();
console.log(stringManipulator.reverseString('arina'));
console.log(stringManipulator.isPalindrome('anna'));
console.log(stringManipulator.countVowels('polina'));
