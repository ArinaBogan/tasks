// Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
// замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
// если слова являются анаграммами. Добавить проверки на ввод

// class Anagram {
//     isValid(str1, str2) {
//         if (!isNaN(str1) || !isNaN(str2))
//             throw new Error('введите слово');
//     }

//     isAnagram(str1, str2) {
//         try {
//             this.isValid(str1, str2);
//             if (str1.split('').sort().join('') == str2.split('').sort().join('')) {
//                 return true;
//             } else {
//                 throw new Error('введите анаграмму')
//             }
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// const anagram = new Anagram();
// const result = anagram.isAnagram('сон', 'нос');
// console.log(result);

class Anagram {
    str1;
    str2;

    isAnagram() {
        if (this.str1.split('').sort().join('') == this.str2.split('').sort().join('')) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
const anagram = new Anagram();
anagram.str1 = 'сон';
anagram.str2 = 'нос';
anagram.isAnagram();
