// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
    students = [
        { id: 0, name: "Kate" },
        { id: 1, name: "Arina" },
        { id: 2, name: "Dasha" },
    ];
}
class Student extends University {
    id;
    getStudentById() {
        const result = this.students.filter((el) => el.id == this.id);
        console.log(result);
    }
}
const student = new Student();
student.id = 2;
student.getStudentById();
