export class BankAccount{
    balance : number;

    constructor(balance: number){
        this.balance = balance;
    }

    Deposit(amout: number) : string{
        this.balance+= amout;
        return `Da nap ${amout} vo tai khoan`
    }

    Withdraw(amout: number) : string{
        if(this.balance<amout){
            return `Tai khoan khong du de rut ${amout}`;
        }
        this.balance-= amout;
        return `rut ${amout} tu tai khoan`
    }
}