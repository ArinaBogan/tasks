// Напишите функцию, которая принимает почту и возвращает объект, вида
// {email,active: true / false}
// true, если почта содержит @, .com / .ru. False в противном случае

const email = 'arina.bogan@gmail.com';

function checkEmail(a) {
    let obj = [];
    obj.email = a;
    (a.includes('@') && (a.includes('.com') || a.includes('ru')))?
    obj.active = true: obj.active = false;
    return obj;
}
const result = checkEmail(email);
console.log(result);