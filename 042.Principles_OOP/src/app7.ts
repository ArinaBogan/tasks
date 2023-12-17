// Создайте класс StringManipulator, который будет иметь методы reverseString(str),
// isPalindrome(str), countVowels(str). Реализуйте функционал для разворота строки,
// проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
// Использовать Generics

class StringManipulator {

    reverseString<type>(str: type): string {
        if (typeof str === "string")
            return (str.split('').reverse().join(''));
    }

    isPalindrome<type>(str: type): boolean {
        if (typeof str === "string")
            return str == str.split('').reverse().join('') ? true : false
    }

    countVowels<type>(str: type): number {
        const vowels: string = 'aeyuio';
        let count: number = 0

        if (typeof str == "string")

            for (let i: number = 0; i < str.length; i++) {
                if (vowels.includes(str[i])) {
                    count++
                }
            }
        return count
    }
}

const stringManipulator = new StringManipulator();

console.log(stringManipulator.reverseString<string>('arina'));
console.log(stringManipulator.isPalindrome<string>('anna'));
console.log(stringManipulator.countVowels<string>('polina'));
