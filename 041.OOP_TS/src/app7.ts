// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.

class TodoList {
    tasks: string[] = ['a', 'b'];

    addTask(newTask: string) {
        this.tasks.push(newTask);
    };

    removeTask() {
        this.tasks.pop()
    };

    getTasks(): string[] {
        return this.tasks
    }
}

const toDoList = new TodoList()
toDoList.addTask('c');
toDoList.removeTask();
console.log(toDoList.getTasks());