// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца 

let a = +prompt('введите номер месяца');

switch (a) {
    case 1:
    case 2:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('введите другое значение');
        break;
}

