// Напишите функцию, принимающую в качестве параметра статичный объект.
// Функция возвращает новый объект, где значения – исключительно числа
// первоначального объекта. IIFE

(function (obj) {
     let new_obj = {};
     for (let key in obj) {
          if (!isNaN(obj[key])) {
               new_obj[key] = obj[key];
          }
     }
     console.log(new_obj);

}(obj = {
     name: 'Arina',
     id: '1',
     age: '20'
}));