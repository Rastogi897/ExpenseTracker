import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    function titleHandler(event){
        setTitle(event.target.value);
    }

    function amountHandler(event){
        setAmount(event.target.value);
    }

    function dateHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseDate);
        // console.log(expenseDate);
        setTitle('');
        setDate('');
        setAmount('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" value={enteredAmount} onChange={amountHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;