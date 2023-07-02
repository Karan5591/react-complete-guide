import React, {useState} from 'react'
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Cards"



const  ExpenseItem=(props)=>
{
    const [amount1, setTitle]=useState(props.amount);
    
    const ClickHandler=()=>{
       setTitle('100');
    }
    return(
         <Card className="expense-item">
           
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={amount1}  LocationOfExpenditure={props.LocationOfExpenditure}/> 
        <button onClick={ClickHandler}>Update Amount</button>
         </Card>
    );
}
export default ExpenseItem;