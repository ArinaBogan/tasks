// Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pwd": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
class ServerPost {
    middleware() {
        return this.controller();
    }
    controller() {
        try {
            return this.service();
        }
        catch (error) {
            return error.message;
        }
    }
    service() {
        return this.repository();
    }
    repository() {
        const arr = [
            { "email": "Test1", "pwd": "test1" },
            { "email": "Test2", "pwd": "test2" },
            { "email": "Test3", "pwd": "test3" },
            { "email": "Test4", "pwd": "test4" },
        ];
        const filter = arr.filter((el) => el.email == obj.email);
        if (filter.length) {
            throw new Error('this obj is already exist');
        }
        else {
            arr.push({ ...obj });
        }
        return arr;
    }
}
const obj = JSON.parse(`{ "email": "Test", "pwd": "test" }`);
const serverPost = new ServerPost();
console.log(serverPost.middleware());
