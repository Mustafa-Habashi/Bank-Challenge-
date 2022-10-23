export default class Transactions {

    #date;
    #creditAmount;
    #debitAmount;
    #currentBalance;

    constructor(date = new Date(), creditAmount, debitAmount) {

        this.#date = date;
        this.#creditAmount = creditAmount;
        this.#debitAmount = debitAmount;

    }

    getDate() {
        return this.#date.toLocaleDateString();
    }

    getCreditAmount() {
        return this.#creditAmount;

    }


    getDebitAmount() {
        return this.#debitAmount;
    }


    setCurrentBalance(balance) {
        this.#currentBalance = balance;
    }

    getCurrentBalance() {
        return this.#currentBalance;
    }






}