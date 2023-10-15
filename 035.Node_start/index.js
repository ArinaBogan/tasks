const express = require('express');

const app = express();

app.get('/', (request, response) => {
    const arr = [1, 1, 4, 5, 5, 2, 6];
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    response.send(newArr);
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const arr = [1, 2, 3, 4, 5, 6];
    const res = [];
    let item = [];
    for (let i = 0; i < arr.length; i++) {
        item.push(arr[i])
        if (item.length == id) {
            res.push(item)
            item = [];
        }
    }
    response.send(res);
});

app.get('/about', (request, response) => {
    response.send('hello,this is route "about"')
});
app.get('/contact', (request, response) => {
    response.send('hello,this is route "contact"')
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

