// Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo().

interface iProduct {
    title: string,
    price: number
}

class Product {

}
const product=new Product()

// {interface iProduct {
//     name: string;
//     price: number;
// };

// interface iPrice {
//     product: iProduct[];
//     displayProductInfo(): iProduct[]
// }

// class Product {
//     product: iProduct[] = [{ name: 'tv', price: 10 }, { name: 'tj', price: 21 }, { name: 'tp', price: 25 }]

//     displayProductInfo() {
//         const filtered: iProduct[] = this.product.filter((el:iProduct) => {
//             if (el.price > 20) {
//                 return true
//             }
//         })
//         return filtered
//     }
// }
// const product: iPrice = new Product();
// console.log(product.displayProductInfo());}