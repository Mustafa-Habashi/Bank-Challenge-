import Account from "../src/Account.js"
import Transactions from "../src/transactions.js";


describe('intisialsation of the bank account', () => {
    it('Creates an empty array of transactions when a new bank account is created', () => {

        let bankAccounnt1 = new Account();

        let result = bankAccounnt1.getTransactions.length

        expect(result).toBe(0);
    })

    it('Gets current balance of the account (defalut is set to zero)', () => {

        let bankAccounnt1 = new Account();

        let result = bankAccounnt1.getBalance()

        expect(result).toBe(0);
    })


})


describe('Testing the Account and Transaction classes decoupling', () => {
    let bankAccounnt1;
    let transaction1;

    beforeEach(() => {
        bankAccounnt1 = new Account();
        transaction1 = new Transactions(new Date(2022, 10, 22), 1000, 0)

    })

    afterEach(() => {
        bankAccounnt1 = undefined;
        transaction1 = undefined;

    })

    it('Tests that transaction gets added to the array when called', () => {


        bankAccounnt1.addTransactions(transaction1)
        let result = bankAccounnt1.getTransactions().length;

        expect(result).toEqual(1)

    })

    it('Tests that the balance updates when transactions are added/ credit is added', () => {


        bankAccounnt1.addTransactions(transaction1)
        let result = transaction1.getCurrentBalance();

        expect(result).toEqual(1000)

    })


})

describe('Testing the Account and Transaction classes', () => {
    let bankAccounnt1;
    let transaction1;

    beforeEach(() => {
        bankAccounnt1 = new Account(2000);
        transaction1 = new Transactions(new Date(2022, 10, 22), 0, 500)

    })

    afterEach(() => {
        bankAccounnt1 = undefined;
        transaction1 = undefined;

    })

    it('Tests that debit changes the balance of account/transaction balance', () => {


        bankAccounnt1.addTransactions(transaction1)
        let result = transaction1.getCurrentBalance()

        expect(result).toEqual(1500)

    })


    it('Tests that it updates the balance after multiple transactions', () => {

        let transaction2 = new Transactions(new Date(2022, 10, 22), 0, 500)
        let transaction3 = new Transactions(new Date(2022, 10, 22), 200, 0)

        bankAccounnt1.addTransactions(transaction1)
        bankAccounnt1.addTransactions(transaction2)
        bankAccounnt1.addTransactions(transaction3)
        let result = bankAccounnt1.getBalance()

        expect(result).toEqual(1200)

    })



})