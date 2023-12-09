// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'
const str = ['qert', 'dsaf', 'bvcxz', 'yuio', 'nvabn'];
let result = str.filter((el) => {
    if (el.includes('a')) {
        return el;
    }
});
console.log(result);
