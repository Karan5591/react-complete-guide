
import "./ExpenseDetails.css"
import './Expenses.css';


const ExpenseDetails = (props)=>
{
  console.log(props)
    
    return(
       
          
        <div className="expense-detail">
           
            <div className="expense-detail__description" ><h2>{props.title}</h2></div>
        <div className="expense-detail__description"><h2>{props.Location}</h2></div>
        <div className="expense-detail__price">${props.amount}</div>
        
        </div>
    );
}
export default ExpenseDetails;