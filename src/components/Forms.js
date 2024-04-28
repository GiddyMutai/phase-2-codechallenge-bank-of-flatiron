import React from 'react'

function Forms() {
  return (
    <>
    <form id='search'>
        <input type='text' name='search' id='search' placeholder='Search For Recent Transactions'></input>
        <input type="submit" value="🔍" id="submit"></input>
    </form>
    </>
  )
}

export default Forms