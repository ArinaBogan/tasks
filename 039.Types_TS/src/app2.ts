// Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'

const str: string[] = ['qert', 'dsaf', 'bvcxz', 'yuio', 'nvabn'];

let result: string[] = str.filter((el: string) => {
    if (el.includes('a')) {
        return el
    }
})
console.log(result);
