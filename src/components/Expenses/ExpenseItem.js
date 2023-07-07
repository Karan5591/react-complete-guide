import React, {useState} from 'react'
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Cards"
import Expenses from './Expenses'



const  ExpenseItem=(props)=>
{
  
    return(
         <Card className="expense-item">
        
        <ExpenseDate date={props.date} filter={props.filter}/>
        <ExpenseDetails title={props.title} amount={props.amount}  Location={props.Location}/> 
        {/* <button onClick={ClickHandler}>Update Amount</button> */}
           </Card>
    );
}
export default ExpenseItem;