// На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// способы обращения к первому и последнему элементам

const arr = ['hschool', 'hschool_0', 'hschool_1'];

// console.log(arr[0], arr[2]);

// for (let i = 0; i < arr.length; i++) {
//     if (i == 0 || i == 2) {
//         console.log(arr[i]);
//     }
// }

arr.forEach(function (el, index) {
    if (index == 0 || index == 2){
        console.log(el);
    }
})