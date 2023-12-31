// Напишите код, который сделает из массива объект
// [ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20}

interface iArr9 {
    name: string,
    value: number
}

const arr9: iArr9[] = [
    { name: 'width', value: 10 },
    { name: 'height', value: 20 }];

function doObject(arr9: iArr9[]) {
    const obj = {};

    for (let i: number = 0; i < arr9.length; i++) {
        obj[arr9[i].name] = arr9[i].value
    }
    return obj
}
console.log(doObject(arr9));
