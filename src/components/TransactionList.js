import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions }) {
  return (
    <table id="transaction-table">
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>   
        </tr>
      {transactions.map((transaction, index) => {
        return (
          <Transaction
            key={index}
            date={transaction.date}
            desc={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
          />
        );
      })}
    </table>
  );
}

export default TransactionList;
