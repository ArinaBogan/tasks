// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке
const arr2 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function name2(arr2) {
    const result = [];
    for (let i = arr2.length - 1; i >= 0; i--) {
        result.push(arr2[i]);
    }
    return result;
}
console.log(name2(arr2));
// console.log(arr2.reverse());
