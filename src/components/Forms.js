import React, { useState } from 'react'

function Forms() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle changes in the search input
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <>
    <form onSubmit={handleSubmit} id='search-form'>
      <input
        type="text"
        id="search-form"
        placeholder="Search a Recent Transaction"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>

    <div id='other-forms'>
        <form id='date-form'>
        <label htmlFor="selectedDate">Date:</label>
        <br/>
        <input
            type="date"
            id="date-form"
            value={selectedDate.toISOString().slice(0, 10)}
            onChange={handleDateChange}
        />
        </form>

        <form id='description'>
            <input type='text' id='description' placeholder='Description'/>
        </form>

        <form id='category'>
            <input type='text' id='category' placeholder='Category'/>
        </form>

        <form id='amount'>
            <input type='number' id='amount' placeholder='Amount'/>
        </form>
    </div>
    <br />

    <form id='submit-btn'>
        <input type='submit' value='Add Transaction' id='submit-btn'/>
    </form>
    </>
  )
}

export default Forms