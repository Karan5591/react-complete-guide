import React, {useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = ()=>
{
    const [enteredTitle, setEnteredTitle]=useState('')
    const [enteredAmount, setEnteredAmount]=useState('')
    const [enteredDate, setEnteredDate]=useState('')
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
    return(
        <div className='new-expense__controls'>
            <div  className='new-expense__control' >
           <label>Expense title</label>
            <input type='text' onChange={ChangeTitle}></input>
            </div>
            <div  className='new-expense__control'>
            <label>Expense Amount</label>
            <input type='text' onChange={amountChangeHandler}></input>
            </div>
            <div  className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateChanged}></input>
            </div>
            
                <div className='new-expense__actions'>
           <button>Add Expense</button>
           </div>
        
        </div>
    );
}
export default ExpenseForm;