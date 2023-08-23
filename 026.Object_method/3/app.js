// На входе статичный объект и строка str. Написать функцию на поиск в объекте
// значения str. Values 

const obj = {
    id: 'test',
    name: 'Arina',
    age: 20
}

const str = 'Arina';

function searchStr(obj, str) {
    try {
        const res = Object.values(obj);
        if (!res.includes(str))
            throw new Error('false')
        return true;
    } catch (error) {
        return error.message;
    }
}
const result = searchStr(obj, str);
console.log(result);
