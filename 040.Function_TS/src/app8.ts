// У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту

const arr8: string[] = ['test1.gmail.com',
    'test2.@gmail.com',
    'test3.@gmail.com',
    'test4.@gmail.com'];

function isValid(arr8: string[]): never | void {
    if (!Array.isArray(arr8)) throw new Error('enter array');
    if (!arr8.length) throw new Error('array is empty');
    if (!arr8.every((el: string) => typeof el == 'string')) throw new Error('element must be string');
    if (!arr8.every((el: string) => /^[\w\.\_\-\$]+@+[a-z]+\.+[a-z]{2-4}$/gm.test(el))) throw new Error('email is not correct');
}

function checkEmail(arr8: string[]): string[] {
    try {
        isValid(arr8)
        const arrEmail: string[] = [];
        for (let i: number = 0; i < arr8.length; i++) {
            if (!arrEmail.includes(arr8[i])) {
                arrEmail.push(arr8[i]);
            }
        }
        return arrEmail;
    } catch (error) {
        return error.message
    }

}

console.log(checkEmail(arr8));
