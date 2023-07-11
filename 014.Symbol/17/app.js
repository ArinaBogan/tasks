// На вход программе подается строка, где каждое слово заканчивается “_”.
// Программа должна убрать “_” и первую букву каждого слова (помимо первого)
// преобразовать в верхний регистр
// anna_test_test -> annaTestTest

const a = 'anna_test_test'.split('_');
res = '';

for (let i = 1; i < a.length; i++) {
    res += a[i][0].toUpperCase() + a[i].slice(1);
}
console.log(a[0]+res);