// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

let a = prompt('введите число');

if (isNaN(a)) {
    console.log('ошибка');
} else {
    let b = Math.sqrt(a);
    console.log(b.toFixed(0));
    console.log(b.toFixed(1));
    console.log(b.toFixed(2));
}
