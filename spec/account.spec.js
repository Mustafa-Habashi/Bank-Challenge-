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


})