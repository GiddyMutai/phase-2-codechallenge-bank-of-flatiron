import React from 'react'

function Transaction({date, description, amount, category}) {
  return (
    <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
    </tr>
  )
}

export default Transaction