import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Cards"
import "./components//Expenses/Expenses.css"
import NewExpense from "./components/NewEpense/NewExpense"
import React, { useState } from "react";

let tempArr=[];
const App=()=> {
 
const expenses=[{
  id:'1',
  title:"Book",
  amount:10,
  date: new Date(),
  Location:'hp'

}]

 // const [data, newData]=useState([]) 
 let newArr=[]
  const addExpenseHandler=(expense)=>{}
  //============================================Add Data Dynamically============  
  //   let newArr=[];
  //   tempArr=[...tempArr]
  //   tempArr.push(expense)
  //   console.log(tempArr)
  //   tempArr.forEach((exp,index)=>
  //   {
  //     newArr.push(
       
  //       <div key={index}><ExpenseItem
  //     title={exp.title}
  //     amount={exp.amount} 
  //     date={exp.date}
  //     Location={exp.Location}
  //     ></ExpenseItem> </div>)}); 
      
  //    newData(newArr) 
  //  }

//=========================================================================================

 expenses.forEach((exp, index)=>{
  
  newArr.push(
    <div key={index}><ExpenseItem
  title={exp.title}
  amount={exp.amount} 
  date={exp.date}
  Location={exp.Location}
  ></ExpenseItem>
    </div>)
})
return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
      {/* <Card className="expenses" >{data}</Card> */}
      <Card className="expenses" >{newArr}</Card>
      </div>
  );
}
export default App;
