// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

const a = prompt().toLowerCase();
str = '';

for (let i = 0; i <= a.length; i++) {
    if (a[i] === 'a' || a[i] === 'e' || a[i] === 'o' || a[i] === 'o' || a[i] === 'i' || a[i] === 'u')
        str += a[i];
}
console.log(str);

