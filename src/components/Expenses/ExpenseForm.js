const ExpenseForm = ()=>
{
    const ChangeTitle=()=>
    {
        console.log("title changed")
    }
    return(
        <div style={{textAlign: "center"}}>
            <div >
           <label>Expense title</label>
           </div>
           <div>
            <input type='text' onChange={ChangeTitle}></input><br></br></div>
            <div>
            <label>Expense Amount</label></div>
            <div>
            <input type='text'></input><br></br></div>
            <div>
            <label>Date</label></div>
            <div>
            <input type='text'></input></div>
            <div>
           <button>Add Expense</button></div>
        
        </div>
    );
}
export default ExpenseForm;