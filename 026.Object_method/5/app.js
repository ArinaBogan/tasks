// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте. 

const n = 11;
const obj = {};

function doObj(n) {
    for (let i = 1; i < n; i++){
        obj[i]=i;
    }
    return obj;
}

function checkKey(obj){
    const arr=Object.keys(obj);
    let res=arr.some(function(el){
        if(el==10) return true;
    })
    return res;
}

const result=doObj(n);
const check=checkKey(result);
console.log(check);
