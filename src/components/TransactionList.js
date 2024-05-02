import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
  return (
    <table id="transaction-table">
        <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>   
        </tr>
        </thead>
        <tbody>
          {transactions.map(
            (transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            )
          )}

        </tbody>
    </table>
  );
}

export default TransactionList;
