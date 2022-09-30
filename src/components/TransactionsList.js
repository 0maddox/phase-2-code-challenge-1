import React,{useState,useEffect} from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, setTransactions, search, setSearch }) {
  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data))
  },
  [setTransactions]
  )
  const filteredTransactions =transactions.filter((transactions) => transactions.description.toLowerCase().includes(search.toLowerCase()))

  const transactionList =filteredTransactions.map((transactions)=>{
    return< transactions transactions={transactions} setTransactions={setTransactions} key={transactions.id} date={transactions.date} description={transactions.description} category={transactions.category} amount={transactions.amount} id={transactions.id}/>
 })
 
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
      </tbody>
    </table>
  );
}

export default TransactionsList;
