import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {

    function saveExpenseData(enteredData){
        const expenseData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseData} ></ExpenseForm>
        </div>
    );
}

export default NewExpense;