// Напишите функцию, которая принимает два параметра: предложение из
// нескольких слов и букву. Функция должна подсчитывать количество вхождений
// указанной буквы в строке. Добавить проверки

class DoCount {
    isValid(l, str) {
        if (!isNaN(l) || !isNaN(str)) throw new Error('некорректное значение');
    }
    doSum(l, str) {
        try {
            this.isValid(l,str);
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] == l)
                    count++
            }
            console.log(count);
        } catch (error) {
           console.log(error.message);
        }

    }
}
const doCount = new DoCount();
doCount.doSum('a','arina');
