// На входе статичный объект и строка str. Необходимо найти в объекте ключ str и
// вывести true при наличии совпадения, false в противном случае 

const obj = {
    id: '1',
    name: 'Arina',
    age: 20
}

const str = 'id';

const bool = obj.hasOwnProperty(str);
console.log(bool);
