// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.
let str12 = 'qwertyuiopasdfg';
let alf = 'aeyuio';
let i = 0;
while (i < alf.length) {
    if (str12.includes(alf[i])) {
        str12 = str12.replaceAll(alf[i], '*');
    }
    i++;
}
console.log(str12);
