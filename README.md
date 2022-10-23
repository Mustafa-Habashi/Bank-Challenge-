# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!



## Pre-Requisite and Installation

1. Fork the bank challange to your local repo
2. Clone it in to your local Directory
3. Install Jasmine

```
Command to setup Jasmine
npm init
npm i --save-dev jasmine
npm jasmine init
```

## User Stories

```
As a user
I want to make a deposit of £1000 on 10-01-2012
So that the transaction can be stored into my account

As a user
I want to deposit £2000 on 13-01-2012
So that the transaction can be stored into my account

As a user
I want to withdraw £500 on 14-01-2012
So that the transaction can be stored into my account

As a user i am able print out a statement to see my recent transactions
```

### User Strory 1 / User Story 2

```
As a user
I want to make a deposit of £1000 on 10-01-2012
So that the transaction can be stored into my account
```

```
As a user
I want to deposit £2000 on 13-01-2012
So that the transaction can be stored into my account
```

### Domain Model

| Objects      | Properties              | Messages                            | Output    |
| ------------ | ----------------------- | ----------------------------------- | --------- |
| Account      | balance(@int)           | getBalance()                        | @interger |
|              | transactionArray@Array |getTransactions(@Transactions) | @Array    |
|              |                         | addTransactions(@Transactions)   | @void     |
| Transactions | date                    | getDate()                           | @date     |
|              | debitAmount            | getDebitAmount()                  | @integer  |
|              | creditAmount            | getCreditAmount()                  | @integer  |
|              | currentBalance          | getCurrentBalance()                        | @integer  |
|              |                         | setCurrentBalance(@amt)                    | @interger |

### Tests for User Story 1

1. Test to see if Balance is set to zero at default
2. Test transaction is added to array after added to account
3. Test that debit and credit amounts updated current balance of account.
4. Test for multiple transactions can be added and updates the balance
5. Tests for mocks of transactions on the account class as certain function are called.


### Tests for User Story 2

1. Test that 2000 has been deposited into account 
2. Test to check the  balance is 3000 

### User Strory 3

```
As a user
I want to withdraw £500 on 14-01-2012
So that the transaction can be stored into my account
```

### Domain Model

| Objects      | Properties              | Messages                            | Output    |
| ------------ | ----------------------- | ----------------------------------- | --------- |
| Account      | balance(@int)           | getBalance()                        | @interger |
|              | transactionArray@Array |getTransactions(@Transactions) | @Array    |
|              |                         | addTransactions(@Transactions)   | @void     |
| Transactions | date                    | getDate()                           | @date     |
|              | debitAmount            | getDebitAmount()                  | @integer  |
|              | creditAmount            | getCreditAmount()                  | @integer  |
|              | currentBalance          | getCurrentBalance()                        | @integer  |
|              |                         | setCurrentBalance(@amt)                    | @interger |

### Tests for User Story 3

1. Test that debitAmount is called.
2. Test that when debit is called balance changes and updates.

### User Strory 4

```
As a user i am able print out a statement to see my recent transactions
```

### Domain Model

| Objects      | Properties              | Messages                            | Output    |
| Statement    |                         | print(@Transactions)                      |           |

### Tests for User Story 4

1. printStament is called and console logs the list of transactions and checks if console log is called.