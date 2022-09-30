import React, {useState} from "react";
import TransactionsList from "./TransactionsList";

function AddTransactionForm() {
  const [formData,setFormData ] = useState({
    date:"",
    description:"",
    category:"",
    amount:0,
  })
  function handleOnChange (e){
    let name =e.target.name
    let value =e.target.value
    setFormData({
      ...formData,[name]:value
    })
  }

  function handleSubmit(e){
    e.preventdefault()
    fetch("http://localhost:8001/transactions",{
      method:"post",
      headers :{
        "content-Type":"applicaton/json",
      },
      body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>{
      const newTransactionData =[...TransactionsList,data]
      setTransactions(newTransactionData)
    })
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit= {handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange ={handleOnChange}/>
          <input type="text" name="description" placeholder="Description" onChange ={handleOnChange}/>
          <input type="text" name="category" placeholder="Category" onChange ={handleOnChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange ={handleOnChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
