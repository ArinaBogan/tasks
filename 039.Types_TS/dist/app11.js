// На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
const arr11 = ['test@gmail.com', 'test111@gmail.com', 'test222@gmail.com'];
const res11 = arr11.every((el) => {
    if (/^[a-zA-Z0-9\.\-\_]+@[a-z]{4,6}\.+[a-z]{2,4}$/gm.test(el)) {
        return true;
    }
    else {
        return false;
    }
});
console.log(res11);
