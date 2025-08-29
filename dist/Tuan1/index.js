"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
const Book_1 = require("./Book");
const Car_1 = require("./Car");
const Person_1 = require("./Person");
const Rectangle_1 = require("./Rectangle");
const Student_1 = require("./Student");
function hello(name) {
    return `Hello, ${name}!`;
}
//Bai 1
const a = new Person_1.Person("Ming", 30);
console.log(hello(a.name));
//Bai 2
const b = new Student_1.Student("18KTPM", 30, "Ming");
console.log(b);
//Bai 3
const c = new Car_1.Car("Toyota", "Camry", "2023");
console.log(c);
//Bai 4
const d = new Rectangle_1.Rectangle(1, 2);
console.log(`Chu vi la: ${d.CalcArea()} & Dien tich la: ${d.CalcPerimeter()}`);
//Bai 5
const user = new BankAccount_1.BankAccount(100000);
console.log(user.Deposit(200000));
console.log(user.Withdraw(200000));
console.log(user.Withdraw(200000));
//Bai 6
const book = new Book_1.Book("Cong chua ngu trong rung", "IDK", 2000);
