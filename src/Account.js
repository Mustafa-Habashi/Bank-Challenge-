export default class Account {

    #currentBalance;
    #transactionsArray;

    constructor(currentBalance = 0) {
        this.#currentBalance = currentBalance;
        this.#transactionsArray = [];

    }









    getTransactions() {
        return this.#transactionsArray
    }

    getCurrentBalance() {
        return this.currentBalance;
    }


}