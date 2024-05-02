import React, { useState } from "react";

function AddTransaction({ onAddTransaction }) {
  const [date, addDate] = useState("");
  const [description, addDescription] = useState("");
  const [category, addCategory] = useState("");
  const [amount, addAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount,
      date,
      category,
    };

    onAddTransaction(newTransaction);
  };

  return (
    <div className="add-transaction">
      <form className="add-forms" onSubmit={handleSubmit}>
        <div className="input-fields">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => addDate(e.target.value)}
          ></input>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => addDescription(e.target.value)}
          ></input>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => addCategory(e.target.value)}
          ></input>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => addAmount(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
