import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Cards'
import './Expenses.css';
import ExpenseFilter from './ExpensesFilter'

const Expenses = (props) => {
console.log(props.Items[0].date.getFullYear())
  const [filteredYear, setFilteredYear]=useState('2023')
  const filterChangeHandler=selectedYear =>
  {
    setFilteredYear(selectedYear);
  }


  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
     
     {props.Items.filter((chk)=>{return chk.date.getFullYear()===filteredYear}).map((exp)=>(
      
        <ExpenseItem 
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
        />
      ))}
      
      
      
    </Card>
  );
}

export default Expenses;