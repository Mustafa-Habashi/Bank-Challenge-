import Transactions from "../src/transactions.js";



describe('Transaction class/ date and credit/debit tests', () => {
    it('tests if date gets toSttingLocalised when getDate function is called', () => {

        let transactions1 = new Transactions(new Date(2022, 9, 22), 1000, 0);

        let result = transactions1.getDate()

        expect(result).toBe("22/10/2022");
    })

    it('tests if credit amount is returned when function is called', () => {

        let transactions1 = new Transactions(new Date(2022, 9, 22), 1000, 0);

        let result = transactions1.getCreditAmount()

        expect(result).toBe(1000);
    })
    it('tests if debit amount is returned when function is called', () => {

        let transactions1 = new Transactions(new Date(2022, 9, 22), 0, 500);

        let result = transactions1.getDebitAmount()

        expect(result).toBe(500);
    })


})