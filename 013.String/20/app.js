// Пользователь вводит строку. Необходимо посчитать количество гласных

const a = prompt('введите строку');
let cout = 0;

for (let i = 0; i < a.length; i++) {

    if (a[i] === `a` || a[i] === `o` || a[i] === `u` || a[i] === `e` || a[i] === `i`) {
        cout += 1;
    }

}
console.log(cout);