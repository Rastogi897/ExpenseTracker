import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import './ExpenseComp.css';
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function ExpenseComp(props){
    // eslint-disable-next-line
    const [filterYear, setFilterYear] = useState('2019');

    function handleYear(selectedYear){
        setFilterYear(selectedYear);
    }

    const filteredExpense = props.expense.filter(exp => {
        return exp.date.getFullYear().toString() === filterYear;
    })

    return (
        <div className="expenses">

        <ExpenseFilter selected = {filterYear} changeYear = {handleYear}/>
        <ExpenseChart expenses = {filteredExpense}></ExpenseChart>


        {filteredExpense.length === 0 ? <p align='center'>No Expense Found.</p> : (
            filteredExpense.map(items => 
            <ExpenseItem 
                key = {items.id}
                title = {items.title}
                amount = {items.amount}
                date = {items.date}
            />
        )
        )}
        
        </div>
    );
}

export default ExpenseComp;