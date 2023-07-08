import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Cards'
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

const [filteredYear, setFilteredYear]=useState(2023)

let filteredExpenses=props.Items.filter((chk)=>{
  
  let num=parseInt(filteredYear)
  
  return (chk.date.getFullYear())===num
})
console.log(filteredExpenses); 

  
  const filterChangeHandler=selectedYear =>
  {
    setFilteredYear(selectedYear);
  }

  let expenseAvailable= <p style={{"color":"White"}}>No expense Found</p>
  if(filteredExpenses.length===1)
  {
    expenseAvailable= filteredExpenses.map((exp)=>(
      <>
      <ExpenseItem 
      key={exp.id}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
      ></ExpenseItem>
      <p style={{"color":"White"}}>Only single Expense here. Please add more...</p>
      </>
      ))
      
     
  }
  if(filteredExpenses.length>1)
  {
    expenseAvailable= filteredExpenses.map((exp)=>(
      
      <ExpenseItem 
      key={exp.id}
      title={exp.title}
      amount={exp.amount}
      date={exp.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     {expenseAvailable}
     <ExpensesChart expenses={filteredExpenses}/>
      </Card>
  );
}

export default Expenses;