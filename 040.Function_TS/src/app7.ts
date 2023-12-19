// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением

interface iArr7 {
    id: number,
    title: string,
    count: number,
    price: number
}

const arr7: iArr7[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
]

function maxCost2(arr7:iArr7[]){
    let maxCost:number=0;
    let maxCostTitle:string;

    arr7.forEach((el)=>{
        if(el.count*el.price>maxCost){
            maxCost=el.count*el.price;
            maxCostTitle=el.title
        }
    })
 return maxCostTitle
 }
console.log(maxCost2(arr7));


// function maxCost(a: iArr7[]) {
//     const result: number[] = a.map((el: iArr7) => el.count * el.price);

//     return Math.max(...result)
// }
// console.log(maxCost(arr7));