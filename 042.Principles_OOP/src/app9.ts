// Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку

interface iValidation {
    email: string;
    date: string;
    path: string;
    isValidEmail(): void | never;
    isValidDate(): void;
    isValidPath(): void;
}

class Validation {
    email: string;
    date: string;
    path: string;

    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }

    public isValidEmail() {
        try {
            if (!/^[\w\.\_\-]+@[a-z]+\.+[a-z]{2,5}$/gm.test(this.email)) throw new Error('email is not correct')
            console.log(true);

        } catch (error) {
            console.log(error.message);

        }
    };
    public isValidDate() {
        try {
            if (!/^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}/gm.test(this.date)) throw new Error('date is not correct')
            console.log(true);

        } catch (error) {
            console.log(error.message);

        }
    };
    public isValidPath() {
        try {
            if (!/^[A-Z]{1}\:\/\/[a-zA-Z]+\//gm.test(this.path)) throw new Error('path is not corect')
            console.log(true);

        } catch (error) {
            console.log(error.message);

        }
    };


}

const validation = new Validation('arina@gamil.com', '14.12.2023', 'C://Admin/')
validation.isValidDate();
validation.isValidEmail();
validation.isValidPath();