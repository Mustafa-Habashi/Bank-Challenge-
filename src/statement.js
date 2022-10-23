export default class Statement {

    static printStatement(transactions) {
        console.log("date       || credit  || debit  || balance")
        for (let i = transactions.length - 1; i >= 0; i--) {
            let transactionStatement = `${transactions[i].getDate()} ||`
            if (transactions[i].getCreditAmount() != 0) {

                transactionStatement += ` ${transactions[i].getCreditAmount().toFixed(2)} ||        || `


            } else {
                transactionStatement += `         || ${transactions[i].getDebitAmount().toFixed(2)} || `
            }
            transactionStatement += transactions[i].getCurrentBalance().toFixed(2)
            console.log(transactionStatement)
        }

    }




}