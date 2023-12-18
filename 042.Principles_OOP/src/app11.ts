// Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.

interface iStudents {
    id: number,
    name: string
}

abstract class University {
    abstract getStudentById(): void;

    students: iStudents[] = [
        { id: 0, name: "Kate" },
        { id: 1, name: "Arina" },
        { id: 2, name: "Dasha" },
    ];
}

class Student extends University {
    id: number;

    getStudentById(): void {
        const result: iStudents[] = this.students.filter((el) => el.id == this.id)
        console.log(result);
    }
}

const student = new Student();
student.id = 2;
student.getStudentById()
