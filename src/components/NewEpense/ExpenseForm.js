import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props)=>
{
    
    const [enteredTitle, setEnteredTitle]=useState('')
    const [enteredAmount, setEnteredAmount]=useState('')
    const [enteredDate, setEnteredDate]=useState('')
    const [enteredLocation, setEnteredLocation]=useState('')
    

    const ChangeTitle=(event)=>
    {
        setEnteredTitle(event.target.value)
    }

const amountChangeHandler=(event)=>{
   setEnteredAmount(event.target.value)

}   
const dateChanged=(event)=>{
    setEnteredDate(event.target.value)
   
} 
const changeLocation=(event)=>{
    setEnteredLocation(event.target.value)
  
   
} 
const submitHandler=(event)=>{
    event.preventDefault();

    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        Location:enteredLocation
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('')
    setEnteredTitle('')
    setEnteredLocation('')
}
    return(
        <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div  className='new-expense__control' >
           <label>Expense title</label>
            <input type='text' value={enteredTitle} onChange={ChangeTitle}></input>
            </div>
            <div  className='new-expense__control'>
            <label>Expense Amount</label>
            <input type='text' value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div  className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2023-01-01' max='2023-12-31' value={enteredDate} onChange={dateChanged}></input>
            </div>
            <div  className='new-expense__control'>
            <label>Location</label>
            <input type='text' value={enteredLocation} onChange={changeLocation}></input>
            </div>
            
                <div className='new-expense__actions'>
           <button >Add Expense</button>
           </div>
        
        </div>
        </form>
    );
}
export default ExpenseForm;