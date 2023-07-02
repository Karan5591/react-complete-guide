import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Cards"



const  ExpenseItem=(props)=>
{
    const DeleteClickHandler=()=>{
        console.log("Delete Clicked!!!")
    }
    return(
         <Card className="expense-item">
           
        <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}/> 
        <button onClick={DeleteClickHandler}>Delete Expense</button>
         </Card>
    );
}
export default ExpenseItem;