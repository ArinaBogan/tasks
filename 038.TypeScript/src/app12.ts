// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.

let str12: string = 'qwertyuiopasdfg';
let alf: string = 'aeyuio';
let i: number = 0;

while (i < alf.length) {
    if (str12.includes(alf[i])) {
        str12 = str12.replaceAll(alf[i], '*')
    }
    i++
}
console.log(str12);
