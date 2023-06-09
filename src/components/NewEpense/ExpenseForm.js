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

const [buttonValue, showButtom] = React.useState('block');
const [formValue, showForm] = React.useState('none');

const newVisibleState=()=>{
    if(formValue=='none')
    {
        showForm('block') 
         showButtom('none')
    }
    else{
        showButtom('block')
        showForm('none')
    }
       
}

   return(
        <>
       <div className='new-expense__controls' style={{display:buttonValue}}>
        
            <button onClick={newVisibleState}>Add New Expense</button>

            </div>
        <form onSubmit={submitHandler}>
            
        <div className='new-expense__controls' style={{display:formValue}}>
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
            
                <div className='new-expense__controls'>
                <button onClick={newVisibleState}>Cancel</button>
           <button onClick={newVisibleState}>Add Expense</button>
           
           </div>
        </div>
        </form></>
    );
}
export default ExpenseForm;