import Account from "../src/account.js"
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

describe('Testing the Account and Transaction classes', () => {
    let bankAccounnt1;
    let transaction1;

    beforeEach(() => {
        bankAccounnt1 = new Account(0);
        transaction1 = new Transactions(new Date(2011, 12, 10), 1000, 0)

    })

    afterEach(() => {
        bankAccounnt1 = undefined;
        transaction1 = undefined;

    })

    it('Tests that credit changes the balance of account/transaction balance', () => {


        bankAccounnt1.addTransactions(transaction1)
        let result = transaction1.getCurrentBalance()

        expect(result).toEqual(1000)

    })

    it('Tests that credit changes the balance of account/transaction balance', () => {
        let transaction2 = new Transactions(new Date(2011, 12, 10), 2000, 0)


        bankAccounnt1.addTransactions(transaction1)
        bankAccounnt1.addTransactions(transaction2)
        let result = bankAccounnt1.getBalance()

        expect(result).toEqual(3000)

    })



    it('Tests that it updates the balance after multiple transactions debit and credit', () => {

        let transaction2 = new Transactions(new Date(2011, 12, 12), 2000, 0)
        let transaction3 = new Transactions(new Date(2011, 12, 14), 0, 500)

        bankAccounnt1.addTransactions(transaction1)
        bankAccounnt1.addTransactions(transaction2)
        bankAccounnt1.addTransactions(transaction3)
        let result = bankAccounnt1.getBalance()

        expect(result).toEqual(2500)

    })



})



describe('Testing the Account and Transaction classes decoupling', () => {
    let bankAccounnt1;
    let mocktransaction2;

    beforeEach(() => {
        bankAccounnt1 = new Account(1000);


        mocktransaction2 = {
            date: '12/1/2012', creditAmount: 0, debitAmount: 500, currentBalance: 0,
            getCreditAmount: () => {
                return 0
            },

            getDebitAmount: () => {
                return 500
            },

            setCurrentBalance: () => {
                return 500
            },
            getCurrentBalance: () => {
                return 500
            }
        }

    })

    afterEach(() => {
        bankAccounnt1 = undefined;

    })

    it('Tests getDebitAmount is called using spy Function', () => {

        const transactionSpy = spyOn(mocktransaction2, 'getDebitAmount')


        bankAccounnt1.addTransactions(mocktransaction2)

        expect(transactionSpy).toHaveBeenCalled();

    })

})




describe('Testing the Account and Transaction classes decoupling', () => {
    let bankAccounnt1;
    let mocktransaction2;

    beforeEach(() => {
        bankAccounnt1 = new Account();

        mocktransaction2 = {
            date: '12/1/2012', creditAmount: 1000, debitAmount: 0, currentBalance: 0,
            getCreditAmount: () => {
                return 1000
            },

            setCurrentBalance: () => {
                return 1000
            },
            getCurrentBalance: () => {
                return 1000
            }
        }

    })

    afterEach(() => {
        bankAccounnt1 = undefined;

    })

    it('Tests that transaction gets added to the array when called', () => {


        bankAccounnt1.addTransactions(mocktransaction2)
        let result = bankAccounnt1.getTransactions().length;

        expect(result).toEqual(1)

    })

    it('Tests that the balance updates when transactions are added/ credit is added', () => {


        bankAccounnt1.addTransactions(mocktransaction2)
        let result = mocktransaction2.getCurrentBalance();

        expect(result).toEqual(1000)

    })


})

