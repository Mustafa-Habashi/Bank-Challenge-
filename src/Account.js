export default class Account {

    #balance;
    #transactionsArray;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#transactionsArray = [];

    }









    getTransactions() {
        return this.#transactionsArray
    }

    getBalance() {
        return this.#balance;
    }


}