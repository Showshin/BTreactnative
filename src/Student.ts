import { Person } from "./Person";

export class Student extends Person{
    grade : String;

    constructor(grade: String,age: number, name:String){
        super(name,age);
        this.grade = grade;
    }
}