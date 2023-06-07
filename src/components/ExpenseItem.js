import "./ExpenseItem.css"

function ExpenseItem()
{
    const expenseDate= new Date(2023, 6, 7);
    const expenseTitle='car Insurace';
    const expenseAmount=294;
    const LocationOfExpenditure="Grocery"
    return(
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
       <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{LocationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        
        </div>
       </div>
    );
}
export default ExpenseItem;