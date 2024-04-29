import React from 'react'

function Transaction({date, desc, amount, category}) {
  return (
    <tr>
        <td>{date}</td>
        <td>{desc}</td>
        <td>{category}</td>
        <td>{amount}</td>
    </tr>
  )
}

export default Transaction