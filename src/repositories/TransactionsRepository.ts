/* eslint-disable no-param-reassign */
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTransactions = this.transactions.filter(
      ({ type }) => type === 'income',
    );

    const outcomeTransactions = this.transactions.filter(
      ({ type }) => type === 'outcome',
    );

    const income = incomeTransactions.reduce((acc, curr) => {
      acc += curr.value;
      return acc;
    }, 0);

    const outcome = outcomeTransactions.reduce((acc, curr) => {
      acc += curr.value;
      return acc;
    }, 0);

    return { income, outcome, total: income - outcome };
  }

  public create({ title, type, value }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
