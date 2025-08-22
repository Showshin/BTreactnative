import { BankAccount } from "./BankAccount";
import { Book } from "./Book";
import { Car } from "./Car";
import { Person } from "./Person";
import { Rectangle } from "./Rectangle";
import { Student } from "./Student";

function hello(name: String): String {
  return `Hello, ${name}!`;
}
//Bai 1
const a = new Person("Ming",30);
console.log(hello(a.name));

//Bai 2
const b = new Student("18KTPM",30,"Ming");
console.log(b);

//Bai 3
const c = new Car("Toyota","Camry","2023");
console.log(c);

//Bai 4
const d = new Rectangle(1,2);
console.log(`Chu vi la: ${d.CalcArea()} & Dien tich la: ${d.CalcPerimeter()}`);

//Bai 5
const user = new BankAccount(100000);
console.log(user.Deposit(200000));
console.log(user.Withdraw(200000));
console.log(user.Withdraw(200000));

//Bai 6
const book = new Book("Cong chua ngu trong rung", "IDK",2000);
