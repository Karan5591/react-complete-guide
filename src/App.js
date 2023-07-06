import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Cards"
import "./components//Expenses/Expenses.css"
import NewExpense from "./components/NewEpense/NewExpense"
import React, { useState } from "react";

let tempArr=[];
const App=()=> {
 
  const [data, newData]=useState([]) 
  const addExpenseHandler=(expense)=>{
    
    let newArr=[];
    tempArr=[...tempArr]
    tempArr.push(expense)
    console.log(tempArr)
    tempArr.forEach((exp,index)=>
    {
      newArr.push(
       
        <div key={index}><ExpenseItem
      title={exp.title}
      amount={exp.amount} 
      date={exp.date}
      Location={exp.Location}
      ></ExpenseItem> </div>)}); 
      
     newData(newArr) 
   }
//  expenses.forEach((exp, index)=>{
//   newArr.push(
//     <div key={index}><ExpenseItem
//   title={exp.title}
//   amount={exp.amount} 1
//   date={exp.date}
//   LocationOfExpenditure={exp.LocationOfExpenditure}
//   ></ExpenseItem>
  //   </div>)
// })
return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      <Card className="expenses" >{data}</Card>
      </div>
  );
}
export default App;
