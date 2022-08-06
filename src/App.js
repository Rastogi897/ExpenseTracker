import ExpenseComp from "./Components/Expense/ExpenseComp";
import NewExpense from "./Components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

const dummyExpense = [
  {id: 'e1', title: 'Car Insurence', amount: 324, date: new Date(2021, 2, 21)},
  {id: 'e2', title: 'Bike Insurence', amount: 245, date: new Date(2021, 3, 27)},
  {id: 'e3', title: 'House Loan', amount: 5600, date: new Date(2019, 7, 12)}
];

function App() {

  const[expense, setExpense] = useState(dummyExpense);

  function addingExpense(newExpense){
    setExpense(prevExpense => {
      return [newExpense, ...prevExpense]
    })
  }

  return (
    <div>
      <h2 className="header">Expense Tracker - A React App</h2>
      <NewExpense onAddExpense = {addingExpense}></NewExpense>
      <ExpenseComp expense = {expense}/>
    </div>
  );
}

export default App;