import React, { useState } from "react";
import AddTransaction from "./AddTransaction";
import TransactionList from "./TransactionList";
import SearchBar from "./SearchBar";

function FilterContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term)
  }

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase)
  );

  return (
    <div>
      <SearchBar onSearchChange={handleSearchChange} />
      <AddTransaction onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default FilterContainer;
