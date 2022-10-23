import Account from "./src/Account.js";
import Statement from "./src/statement.js";
import Transactions from "./src/transactions.js";




let account1 = new Account()

let transaction1 = new Transactions(new Date(2022, 10, 22), 1000, 0)
let transaction2 = new Transactions(new Date(2022, 10, 22), 2000, 0)
let transaction3 = new Transactions(new Date(2022, 10, 22), 0, 500)

account1.addTransactions(transaction1)
account1.addTransactions(transaction2)
account1.addTransactions(transaction3)


let listOfTransactions = account1.getTransactions();
Statement.printStatement(listOfTransactions)