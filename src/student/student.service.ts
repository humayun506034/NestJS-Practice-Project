import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'John',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane',
      age: 21,
    },
    {
      id: 3,
      name: 'Jack',
      age: 22,
    },
  ];

  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('Studnet not found');
    }
    return student;
  }

  //   POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...data,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  //   PUT

  updateStudent(id: number, data: { name: string; age: number }) {
    const student = this.getStudentById(id);

    student.name = data.name;
    student.age = data.age;
    return student;
  }

  // PATCH

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);

    // if (data.name) {
    //   student.name = data.name;
    // }
    // if (data.age) {
    //   student.age = data.age;
    // }

    Object.assign(student, data);

    return student;
  }

  //DELETE

  deleteStudent(id: number) {
    const student = this.getStudentById(id);
    this.students = this.students.filter((student) => student.id !== id);
    return { message: 'student deleted successfully', student };
  }
}
