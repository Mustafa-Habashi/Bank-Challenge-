export default class Account {

    #balance;
    #transactionsArray;

    constructor(balance = 0) {
        this.#balance = balance;
        this.#transactionsArray = [];

    }

    addTransactions(transaction) {
        if (transaction.getCreditAmount() != 0) {
            this.#balance += transaction.getCreditAmount()
        } else {
            this.#balance -= transaction.getDebitAmount()
        }
        transaction.setCurrentBalance(this.#balance)
        this.#transactionsArray.push(transaction)
    }



    getTransactions() {
        return this.#transactionsArray
    }

    getBalance() {
        return this.#balance;
    }



}