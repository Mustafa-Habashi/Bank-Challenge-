import Statement from "../src/statement.js";
import Transactions from "../src/transactions.js";



describe('printStatement console.log() test', () => {
    let transaction1;
    let transaction2;
    let transaction3;
    let mockTransactions;

    beforeEach(() => {
        transaction1 = new Transactions(new Date(2022, 10, 22), 1000, 0)
        transaction2 = new Transactions(new Date(2022, 10, 22), 2000, 0)
        transaction3 = new Transactions(new Date(2022, 10, 22), 0, 500)

        mockTransactions = [transaction1, transaction2, transaction3]
    })




    it('should call console.log() on the mocktransactions array size', () => {

        const consoleLogSpy = spyOn(console, 'log');

        Statement.printStatement(mockTransactions);

        expect(consoleLogSpy).toHaveBeenCalled();
    });
});


