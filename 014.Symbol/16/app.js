// На вход подается строка из нескольких слов. Необходимо преобразовать каждое
// предложение в хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany

const a='hSСhOol СomPAnY'.trim().toLowerCase();

console.log('#'+a.replaceAll(' ',''));
