// 1.Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
// Добавить необходимые проверки.
// Написать тест для функции

function doPow(a, b) {
    if (typeof a == 'string' || typeof b == 'string') return false;
    return a ** b;
}

describe('test doPow function', () => {
    test('test toBe success', () => {
        const res = doPow(2, 2);
        expect(res).toBe(4);
    })

    test('test toBe false', () => {
        const res = doPow('a', 'b');
        expect(res).toBeFalsy();
    })
})

// 2.Написать функцию которая принимает 2 числа и возвращает результат
// произведения 2 множителей. Добавить необходимые проверки.
// Написать тест для функции

function doMultiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') return false;
    if (!a || !b) return false;
    return a * b
}

describe('test doMultiply', () => {
    test('test toBe success', () => {
        const res = doMultiply(2, 3);
        expect(res).toBe(6)
    })

    test('test toBe false', () => {
        const res = doMultiply('a', 'b');
        expect(res).toBeFalsy()
    })

    test('test toBe false', () => {
        const res = doMultiply();
        expect(res).toBeFalsy()
    })

})

// 3. Написать функцию которая принимает массив чисел и находит сумму всех
// элементов. Добавить необходимые проверки.
// Написать тест для функции

function doSum(arr) {
    if (!arr.length) return false;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) return false
        sum += arr[i];
    }
    return sum;
}

describe('test function doSum', () => {
    const arr = [1, 2, 3, 4, 5];

    test('test toBe success', () => {
        const res = doSum(arr);
        expect(res).toBe(15);
    })

    test('test to be false', () => {
        const res = doSum([]);
        expect(res).toBeFalsy()
    })

    test('test to be false', () => {
        const res = doSum(['a', 'b']);
        expect(res).toBeFalsy()
    })
})

// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10 и произведены в Германии
// Написать тест для функции

function checkArr(arr) {
    const filter = arr.filter((el) => el.count > 10 && el.producer == 'Германия')
    if (!filter.length) return false;
    return filter;
}

describe('test checkArr function', () => {
    const arr = [
        { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
        { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
        { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
        { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
        { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ];
    test('to have length', () => {
        const res = checkArr(arr);
        expect(res).toHaveLength(2);
    })

    test('toEqual', () => {
        const res = checkArr(arr);
        const equal = [{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }];
        expect(res).toEqual(equal);
    })

    test('to be false', () => {
        const res = checkArr([]);
        expect(res).toBeFalsy()
    })
})

// 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
// Необходимо вывести значения массива без дубликатов. Добавить необходимые
// проверки.
// Написать тест для функции

function isUniq(arr) {
    const uniqArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i])
    }
    if (!uniqArr.length) return false;
    return uniqArr;
}

describe('test isUniq function', () => {
    const arr = ['+375291111111', '+375292222222', '+375291111111'];

    test('to have length', () => {
        const res = isUniq(arr);
        expect(res).toHaveLength(2)
    })

    test('toEnqual', () => {
        const res = isUniq(arr);
        const equal = ['+375291111111', '+375292222222'];
        expect(res).toEqual(equal);
    })

    test('to be false', () => {
        const res = isUniq([]);
        expect(res).toBeFalsy()
    })
})

// 6. На входе статичный объект. Необходимо посчитать количество пар (ключ:
// значение) где значение число и вывести количество. Добавить необходимые
// проверки.
// Написать тест для функции

function countNum(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] == 'number')
            obj[key] = count++
    }
    return count;
}

describe('test function countNum', () => {
    const obj = {
        id: 1,
        name: 'Arina',
        year: 2023
    };

    test('to be falsy', () => {
        const res = countNum({});
        expect(res).toBeFalsy();
    });

    test('to be success', () => {
        const res = countNum(obj);
        expect(res).toBe(2);
    });

});


// 7. На входе статичный объект. Необходимо числовые значения удвоить на выходе.
// Написать тест для функции

function doubleVal(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            return obj[key] * 2;
        } else {
            return false;
        }
    }
}

describe('test doubleVal function', () => {
    const obj = {
        id: 1,
        name: 'dce',
        year: 2023
    }

    test('to be success', () => {
        const res = doubleVal(obj);
        expect(res).toBe(2, 4046);
    });

    test('to be falsy', () => {
        const res = doubleVal({});
        expect(res).toBeFalsy();
    });
});

// 8. На входе статичный объект. Необходимо сформировать массив из всх четных
// значений объекта.
// Написать тест для функции

function filterObj(obj) {
    const arr = [];

    for (let key in obj) {
        if (typeof obj[key] == 'number' && obj[key] % 2 == 0)
            arr.push(obj[key]);
    }
    return arr;

}

describe('test function filterObj', () => {
    const obj = {
        num1: 1,
        num2: 2,
        num3: 3,
        num4: 4
    };

    test('to equal', () => {
        const res = filterObj(obj);
        const equal = [2, 4];
        expect(res).toEqual(equal)
    });
})

// 9. На входе статичный массив [1, 2, 3, 4, 5, 6] и динамическое значение n. Необходимо
// разбить данный одномерный массив на маленькие массивы в зависимости от
// того, какого число ввел пользователь. Добавить необходимые проверки.
// 1 -> [[1], [2], [3], [4], [5], [6]]
// 2 -> [[1, 2], [3, 4], [5, 6]]
// 3 -> [[1, 2, 3], [4, 5, 6]]
// 4 -> [[1, 2, 3, 4], [5, 6]
// 5 -> [[1, 2, 3, 4, 5], [6]]
// 6 -> [[1, 2, 3, 4, 5, 6]]
// Написать тест для функции

function newArr(arr, n) {
    if (isNaN(n)) return false;
    const newArr = [];
    const timeArr = [];

    for (let i = 0; i < arr.length; i++) {
        timeArr.push(arr[i]);
        if (timeArr.length == n) {
            newArr.push(timeArr);
            timeArr = [];
        }
        if (i == arr.length - 1) {
            newArr.push(timeArr);
        }
        console.log(newArr);
        return newArr;

    }
}
describe('test function newArr', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const n = 2;

    test("to be falsy", () => {
        const res = newArr(arr, 'a');
        expect(res).toBeFalsy();
    });
})

// 10. Реализуйте функцию, которая принимает в качестве параметра строку и
// возвращает массив без каких-либо элементов с одинаковым значением рядом
// друг с другом.
// Написать тест для функции
// 'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
// 'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
// '12233’ -> [1, 2, 3]
// Написать тест для функции

function returnArr(str) {
    const arr = [];
    if (!isNaN(str)) return false;

    for (let i = 0; i < str.length; i++) {
        if (arr[arr.length - 1] != str[i])
            arr.push(str[i]);
    }
    return arr;
}

describe('test return arr', () => {
    const str = 'aaabbbbccc';

    test('to equal', () => {
        const res = returnArr(str);
        const equal = ['a', 'b', 'c'];
        expect(res).toEqual(equal);
    });

    test('to be falsy',()=>{
        const res=returnArr('');
        expect(res).toBeFalsy();
    });
})
