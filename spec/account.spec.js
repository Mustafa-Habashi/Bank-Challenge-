import Account from "../src/Account.js"


describe('intisialsation of the bank account', () => {
    it('Creates an empty array of transactions when a new bank account is created', () => {

        let bankAccounnt1 = new Account();

        let result = bankAccounnt1.getTransactions.length

        expect(result).toBe(0);
    })


})