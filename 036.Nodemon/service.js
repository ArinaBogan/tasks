const arr = [
    { "id": 1, "name": 'Yesenia', "age": 22 },
    { "id": 2, "name": 'Hanna', "age": 22 },
    { "id": 3, "name": "Stanislau", "age": 25 },
    { "id": 4, "name": "German", "age": 18 },
    { "id": 5, "name": "Maria", "age": 27 }
];

function getAllData() {
    return arr
};

function getDataById(id) {
    const newArr = arr.filter((el) => el.id == id);
    return newArr;
}

function createData(name, age) {
    const newObj = {
        name: name,
        age: age
    };
    arr.push(newObj);
    return arr;
};

function updateData(id, name, age) {
    const filter = arr.filter((el) => el.id != id)
    if (filter.length == arr.length) return 'id not found'
    const newObj = {
        id: id,
        name: name,
        age: age
    }
    filter.push(newObj)
    return filter
};

function deleteData(id) {
    const new_arr = arr.filter((el) => el.id != id)
    return new_arr;
};

module.exports = { getAllData, getDataById, createData, updateData, deleteData };

