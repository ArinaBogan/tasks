// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13

const num=10;

function fibonacchi(a){
    if (a==0||a==1) return a;
    return fibonacchi(a-1)+fibonacchi(a-2);
}

const result=fibonacchi(num);
console.log(result);