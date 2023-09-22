// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

function addHashtag(str) {
    try {
        if (isNaN(str)) {
            console.log('#' + str);
        } else {
            throw new Error('введите слово');
        }
    } catch (error) {
        console.log(error.message);
    }
}
addHashtag('hSСhOol'.toLowerCase());