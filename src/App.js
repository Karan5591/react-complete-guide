import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses=[
    {
      id: 'e1',
      title: 'car Insurance',
      amount: 294,
      date: new Date(2023, 6,7),
      LocationOfExpenditure: 'Delhi'
    },
    {
      id: 'e2',
      title: 'Electricity bill',
      amount: 100,
      date: new Date(2023, 6,7),
      LocationOfExpenditure: "HP"
    },
    {
      id: 'e3',
      title: 'Food',
      amount: 29,
      date: new Date(2023, 6,7),
      LocationOfExpenditure: 'UP'
    }
  ]

let newArr=[];
expenses.forEach((exp, index)=>{
  newArr.push(
  <div key={index}><ExpenseItem
  title={exp.title}
  amount={exp.amount}
  date={exp.date}
  LocationOfExpenditure={exp.LocationOfExpenditure}
  ></ExpenseItem></div>)
})
  
  return (
    <div>
      <h2>Let's get Started!</h2>
      
     <div>{newArr}</div>
      
      </div>
  );
}

export default App;
