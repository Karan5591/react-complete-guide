import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Cards"
import "./components//Expenses/Expenses.css"
import NewExpense from "./components/NewEpense/NewExpense"
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
let tempArr=[];

const DUMMMY_EXPENSES=[{
  id:'1',
  title:"Book",
  amount:10,
  date: new Date(),
  Location:'hp'

},
{
  id:'2',
  title:"fruit",
  amount:100,
  date: new Date(),
  Location:'UP'

}]

const App=()=> {
  
 const [expenses, setExpenses]=useState(DUMMMY_EXPENSES) 
 let newArr=[]
  const addExpenseHandler=(expense)=>{
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    })
  }
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
      <Card className="expenses" >
       
        <Expenses Items={expenses}></Expenses>
        
        </Card>
      </div>
  );
}
export default App;
