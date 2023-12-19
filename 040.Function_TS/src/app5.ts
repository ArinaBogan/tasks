// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

interface iArr5 {
    id: number,
    title: string,
    count: number,
    price: number
}

const arr5: iArr5[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function maxPrice(arr5: iArr5[]): number {
    let price: number = 0;
    let title: string;
    for (let i: number = 0; i < arr5.length; i++) {
        if (arr5[i].price > price)
            price = arr5[i].price;
    }
    return price;
}

console.log(maxPrice(arr5));
