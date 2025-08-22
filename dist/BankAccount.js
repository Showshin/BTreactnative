"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    Deposit(amout) {
        this.balance += amout;
        return `Da nap ${amout} vo tai khoan`;
    }
    Withdraw(amout) {
        if (this.balance < amout) {
            return `So tien khong du de rut`;
        }
        this.balance -= amout;
        return `rut ${amout} tu tai khoan`;
    }
}
exports.BankAccount = BankAccount;
