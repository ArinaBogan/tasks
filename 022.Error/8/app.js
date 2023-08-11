// Реализуйте функцию, которая принимает массив последовательных
// (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"

const inpStr = ["O", "Q", "R", "S"].join('').toLowerCase();

function findLetter(inpStr) {
    try {
        const alfa = 'abcdefghijklmnopqrstuvwxyz';
        const indexStartInput = alfa.indexOf(inpStr[0]);

        const sliceFromAlfa = alfa.slice(indexStartInput, indexStartInput + inpStr.length + 1);

        for (let i = 0; i < sliceFromAlfa.length; i++) {
            if (sliceFromAlfa[i] !== inpStr[i]) {
                console.log(sliceFromAlfa[i]);
                break;
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}
findLetter(inpStr)
