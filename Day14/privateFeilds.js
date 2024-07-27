/**
 * Activity 5: Private Fields
 * Task: 9 Define a class Account with private fields for balance and a method to deposite and withdraw money.
 * Ensure that the balance can only be updated through these methods.
 * Task: 10 Create an instance of the Account class and test the deposite and withdraw methods ,
 * logging the balance after each operation.
 */

class Account{
    #balance
    constructor(balance){
        if(balance < 0){
            throw new Error("Initial Amount can not be negative.")
        }

        this.#balance = balance;
    }

    get balance(){
        return this.#balance
    }

    deposite(depositeAmount){
        if(depositeAmount <= 0){
            throw new Error("Deposite Amount can be positive!");
        }

        this.#balance += depositeAmount;
    }

    withdraw(withdrawAmount){
        if(withdrawAmount <= 0){
            throw new Error("Withdraw Amount can not be negative!")
        } else if(withdrawAmount > this.#balance){
            throw new Error("Insufficient Balance!")
        }

        this.#balance -= withdrawAmount;
    }
}

const account = new Account(100);

try {
    console.log(account.balance) // 100 initial Amount

    account.deposite(5000)
    console.log(account.balance) // 5100

    account.withdraw(4000);
    console.log(account.balance) // 1100
    
    account.withdraw(25000) // throw error: insufficient Balance
} catch (error) {
    console.log(error.message);
}

try {
    const account2 = new Account(-100); // throw error : Initial Amount can not be negative.
    // console.log(account2.balance);
} catch (error) {
    console.log(error.message);
}