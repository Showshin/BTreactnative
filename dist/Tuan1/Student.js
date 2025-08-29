"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(grade, age, name) {
        super(name, age);
        this.grade = grade;
    }
}
exports.Student = Student;
