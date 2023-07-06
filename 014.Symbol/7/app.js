// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

const a = 'hSСhOol'.toLowerCase();

if (isNaN(a)) {
    console.log('#' + a);
} else {
    console.log('ошибка ввода');
}
